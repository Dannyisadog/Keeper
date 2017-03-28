<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "keeper";

$event_name = $_REQUEST["name"];
$event_desc = $_REQUEST["desc"];
$event_date = $_REQUEST["date"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sqlCreateDB = "CREATE DATABASE IF NOT EXISTS keeper";
$sqlDeleteDB = "DROP DATABASE IF EXISTS dannyisadog";

if ($conn->query($sqlCreateDB) === TRUE) {
    // echo "Database create successfully";
    echo "Database create successfully ";
} else {
    // echo "Error creating database: " . $conn->error;
}

$sql = "INSERT INTO event (event_name, event_desc, event_date) VALUES ('$event_name', '$event_desc', '$event_date')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully ";
    echo "event_name: " . "$event_name ";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
