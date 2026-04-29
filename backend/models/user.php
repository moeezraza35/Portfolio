<?php
include("./index.php");

class User extends Model {
  protected $table = 'user';
  public $id;
  public $username;
  public $email;
  public $password;
}
?>