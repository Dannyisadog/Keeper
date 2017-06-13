<?php

$servername = "localhost";
$username = "root";
$password = "dannyisadog10";
$dbname = "keeper";

if (isset($_POST["user_id"])){
  $user_id = $_POST["user_id"];
}else{
  $user_id = "0000";
}
if (isset($_POST["user_name"])){
  $user_name = $_POST["user_name"];
}else{
  $user_name = "test name";
}
if (isset($_POST["user_email"])){
  $user_email = $_POST["user_email"];
}else{
  $user_email = "test email";
}
if (isset($_POST["user_photo"])){
  $user_photo = $_POST["user_photo"];
}else{
  $user_photo = "test photo";
}

if (isset($_POST["user_gender"])){
  $user_gender = $_POST["user_gender"];
}else{
  $user_gender = "male";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_query($conn,"SET NAMES 'utf8'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$serachUserIdsql = "SELECT user_id FROM user WHERE user_id = $user_id";
$result = $conn -> query($serachUserIdsql);

$createUsersql = "INSERT INTO user (user_name, user_id, user_email, user_photo, user_gender) VALUES ('$user_name', '$user_id', '$user_email', '$user_photo', '$user_gender')";

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

