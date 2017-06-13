<?php
header('Content-Type: text/html; charset=utf-8');

$servername = "localhost";
$username = "root";
$password = "dannyisadog10";
$dbname = "keeper";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else {
  // echo "connect successfully";
  // mysql_query("SET NAMES utf8");
}

if (isset($_POST['activity_name'])){
  $activity_name = $_POST['activity_name'];
}else{
  $activity_name = "activity_name";
}
echo $activity_name . "<br>";

if (isset($_POST['activity_user'])){
  $activity_user = $_POST['activity_user'];
}else{
  $activity_user = "activity_user";
}

echo $activity_user . "<br>";

$sql ="DELETE FROM user_activity WHERE activity_name = '$activity_name' AND activity_user = '$activity_user'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}


?>
