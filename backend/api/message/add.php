<?php
include("../../models/message.php");

header("Content-Type:application/json");
if (empty($_POST["email"]) || empty($_POST["body"])) {
  echo json_encode(["success" => false, "error" => "Email and body are required"]);
  exit;
}
$msg = new Message();

$msg->email = $_POST["email"];
$msg->body = $_POST["body"];
$msg->read = false;
$msg->date = date("Y-m-d");
$msg->time = date("H:i:s");

if ($msg->save()) {
  echo json_encode(["success" => true, "id" => $msg->id]);
} else {
  echo json_encode(["success" => false, "error" => "Failed to save message"]);
}
?>