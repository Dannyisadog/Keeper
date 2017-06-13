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
//mysql_query("SET NAMES UTF8");
$sql ="DELETE FROM activity WHERE activity_name = '$activity_name'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}


?>
