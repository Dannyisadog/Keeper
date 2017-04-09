<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "keeper";

if (isset($_REQUEST["user_id"])){
  $user_id = $_REQUEST["user_id"];
}else{
  $user_id = "0000";
}
if (isset($_REQUEST["user_name"])){
  $user_name = $_REQUEST["user_name"];
}else{
  $user_name = "test name";
}
if (isset($_REQUEST["user_email"])){
  $user_email = $_REQUEST["user_email"];
}else{
  $user_email = "test email";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$serachUserIdsql = "SELECT user_id FROM user WHERE user_id = $user_id";
$result = $conn -> query($serachUserIdsql);

$createUsersql = "INSERT INTO user (user_name, user_id, user_email) VALUES ('$user_name', '$user_id', '$user_email')";

if ($result->num_rows > 0) {
    echo "User exits";
    echo "User id: " . "$user_id";
} else {
    echo "User not exits";
    if ($conn->query($createUsersql) === TRUE) {
        echo "New user created successfully";
        echo "User id: " . "$user_id ";
    } else {
        echo "Error: " . $createUsersql . $conn->error;
    }
}
$conn->close();

?>
