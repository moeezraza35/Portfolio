<?php
include("../config.php");

// Database connection (singleton pattern for simplicity)
class DB {
  private static $db_conn = null;
  public static function connect() {
    if (self::$db_conn === null){
      global $DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME, $DB_PORT;
      self::$db_conn = new mysqli(
        $DB_HOST,
        $DB_USER,
        $DB_PASSWORD,
        $DB_NAME,
        $DB_PORT
      );
    }
    if (self::$db_conn->connect_error) {
      die("Database connection failed: " . self::$db_conn->connect_error);
    }
    return self::$db_conn;
  }
}

// Base Model
abstract class Model {
  protected $table;
  protected $attributes = [];
  protected $original = [];
  protected $id;

  public function __construct($attributes = []) {
    $this->fill($attributes);
  }

  public function fill($attributes) {
    foreach ($attributes as $key => $value) {
      if (property_exists($this, $key)) {
        $this->$key = $value;
        $this->attributes[$key] = $value;
        $this->original[$key] = $value;
      }
    }
  }

  // Find a record by primary key (assuming integer 'id')
  public static function find($id) {
    $instance = new static();
    $db = DB::connect();
    $stmt = $db->prepare("SELECT * FROM {$instance->table} WHERE id = ?");
    if (!$stmt) {
      return null;
    }
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    if ($row) {
      $instance->fill($row);
      return $instance;
    }
    return null;
  }

  // Save the model (insert or update)
  public function save() {
    $db = DB::connect();
    if (isset($this->id) && $this->id > 0) {
      // update
      $sets = [];
      $values = [];
      foreach ($this->attributes as $key => $value) {
        if ($key !== 'id') {
          $sets[] = "$key = ?";
          $values[] = $value;
        }
      }
      $values[] = $this->id;
      $sql = "UPDATE {$this->table} SET " . implode(', ', $sets) . " WHERE id = ?";
      $stmt = $db->prepare($sql);
      return $stmt->execute($values);
    } else {
      // insert
      $columns = implode(', ', array_keys($this->attributes));
      $placeholders = ':' . implode(', :', array_keys($this->attributes));
      $stmt = $db->prepare("INSERT INTO {$this->table} ($columns) VALUES ($placeholders)");
      $result = $stmt->execute($this->attributes);
      if ($result) {
        $this->id = $db->insert_id;
        $this->attributes['id'] = $this->id;
      }
      return $result;
    }
  }

  // Delete the record
  public function delete() {
    if (isset($this->id)) {
      $db = DB::connect();
      $stmt = $db->prepare("DELETE FROM {$this->table} WHERE id = ?");
      return $stmt->execute([$this->id]);
    }
    return false;
  }
}
