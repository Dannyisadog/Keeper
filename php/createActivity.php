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

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_query($conn,"SET NAMES 'utf8'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$serachActivityNamesql = "SELECT activity_name FROM activity WHERE activity_name = '".$activity_name."'";
$result = $conn -> query($serachActivityNamesql);

$createActivitysql = "INSERT INTO activity (activity_name, activity_place, activity_time, activity_host) VALUES ('$activity_name', '$activity_place', '$activity_time', '$activity_host')";

if ($result->num_rows > 0) {
    echo "Activity exits";
    // echo "Activity Name: " . "$activity_name";
} else {
    // echo "Activity not exits";
    if ($conn->query($createActivitysql) === TRUE) {
        // echo "New Activity created successfully";
        // echo "Activity Name: " . "$activity_name";
    } else {
        echo "Error: " . $createActivitysql . $conn->error;
    }
}
$conn->close();

?>

