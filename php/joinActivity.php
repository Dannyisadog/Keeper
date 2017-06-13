<?php

$servername = "localhost";
$username = "root";
$password = "dannyisadog10";
$dbname = "keeper";

if (isset($_POST["activity_name"])){
  $activity_name = $_POST["activity_name"];
}else{
  $activity_name = "activity_name";
}

if (isset($_POST["activity_place"])){
  $activity_place = $_POST["activity_place"];
}else{
  $activity_place = "activity_place";
}

if (isset($_POST["activity_time"])){
  $activity_time = $_POST["activity_time"];
}else{
  $activity_time = "activity_time";
}

if (isset($_POST["activity_host"])){
  $activity_host = $_POST["activity_host"];
}else{
  $activity_host = "activity_host";
}

if (isset($_POST["activity_user"])){
  $activity_user = $_POST["activity_user"];
}else{
  $activity_user = "activity_user";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_query($conn,"SET NAMES 'utf8'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$joinActivitysql = "INSERT INTO user_activity (activity_name, activity_place, activity_time, activity_host, activity_user) VALUES ('$activity_name', '$activity_place', '$activity_time', '$activity_host', '$activity_user')";


    // echo "Activity not exits";
    if ($conn->query($joinActivitysql) === TRUE) {
        print_r("join");
    } else {
        echo "Error: " . $joinActivitysql . $conn->error;
    }

$conn->close();

?>

