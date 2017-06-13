<?php

$servername = "localhost";
$username = "root";
$password = "dannyisadog10";
$dbname = "keeper";

if (isset($_REQUEST["user_id"])){
  $user_id = $_REQUEST["user_id"];
}else{
  $user_id = "0000";
}
if (isset($_REQUEST["user_name"])){
  $user_name = $_REQUEST["user_name"];
}else{
  $user_name = "test";
}
if (isset($_REQUEST["event_name"])){
  $event_name = $_REQUEST["event_name"];
}else{
  $event_name = "testEvent";
}
if (isset($_REQUEST["event_desc"])){
  $event_desc = $_REQUEST["event_desc"];
}else{
  $event_desc = "testDesc";
}
if (isset($_REQUEST["event_date"])){
  $event_date = $_REQUEST["event_date"];
}else{
  $event_date = "Date";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_query($conn,"SET NAMES 'utf8'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sqlCreateDB = "CREATE DATABASE IF NOT EXISTS keeper";

if ($conn->query($sqlCreateDB) === TRUE) {
    // echo "Database create successfully";
    echo "Database create successfully <br>";
} else {
    echo "Error creating database: " . $conn->error;
}

$sql = "INSERT INTO event (user_id, user_name, event_name, event_desc, event_date) VALUES ('$user_id', '$user_name', '$event_name', '$event_desc', '$event_date')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    echo "event_name: " . "$event_name ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

?>
