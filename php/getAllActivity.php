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

if (isset($_GET['allActivity'])){

  $query ="SELECT * FROM activity";

  $result = $conn->query($query);

  $all_activity = array();

  if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc()) {
        //  echo "<br> User id: ". $row["user_id"] . " - Event name: ". $row["event_name"]. " - Event description: " . $row["event_desc"] . " - Event date: " . $row["event_date"] . "<br>";
         $activity_tmp_array = array('activity_name' => $row["activity_name"], 'activity_place' => $row["activity_place"], 'activity_time' => $row["activity_time"], 'activity_host' => $row["activity_host"]);
         array_push($all_activity, $activity_tmp_array);
     }
    //  print_r($user_all_event);
     $all_activity = (object)$all_activity;
     echo json_encode($all_activity);
  } else {
     echo "<br> 0 results";
  }
}
?>
