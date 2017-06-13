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

if (isset($_POST['user_id'])){
    $user_id = $_POST['user_id'];
}else{
    $user_id = 0000;
}

$query ="SELECT * FROM user_activity WHERE activity_user = '$user_id'";

$result = $conn->query($query);

$user_all_activity = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //  echo "<br> User id: ". $row["user_id"] . " - Event name: ". $row["event_name"]. " - Event description: " . $row["event_desc"] . " - Event date: " . $row["event_date"] . "<br>";
        $user_tmp_array = array('activity_name' => $row["activity_name"]);
        array_push($user_all_activity, $user_tmp_array);
    }
    //  print_r($user_all_event);
    $user_all_activity = (object)$user_all_activity;
    echo json_encode($user_all_activity);
} else {
    echo "<br> 0 results";
}

?>
