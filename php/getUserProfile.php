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

if (isset($_GET['adminGetAllUserProfile'])){

  $query ="SELECT * FROM user";

  $result = $conn->query($query);

  $user_all_profile = array();

  if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc()) {
        //  echo "<br> User id: ". $row["user_id"] . " - Event name: ". $row["event_name"]. " - Event description: " . $row["event_desc"] . " - Event date: " . $row["event_date"] . "<br>";
         $user_tmp_array = array('user_name' => $row["user_name"], 'user_id' => $row["user_id"], 'user_email' => $row["user_email"], 'user_photo' => $row["user_photo"], 'user_gender' => $row["user_gender"]);
         array_push($user_all_profile, $user_tmp_array);
     }
    //  print_r($user_all_event);
     $user_all_profile = (object)$user_all_profile;
     echo json_encode($user_all_profile);
  } else {
     echo "<br> 0 results";
  }
}
?>
