<?php
include("./index.php");

class Message extends Model {
  protected $table = 'user';
  public $id;
  public $email;
  public $body;
  public $date;
  public $time;
  public $read;
}
?>