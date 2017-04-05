<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "keeper";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else {
  // echo "connect successfully";
}

if (isset($_REQUEST['user_id'])){
  $user_id = $_REQUEST['user_id'];
}else{
  $user_id = "1778696255676580";
}

$query ="SELECT * FROM event WHERE user_id = $user_id";

$result = $conn->query($query);

$user_all_event = array();

if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc()) {
        //  echo "<br> User id: ". $row["user_id"] . " - Event name: ". $row["event_name"]. " - Event description: " . $row["event_desc"] . " - Event date: " . $row["event_date"] . "<br>";
         $user_tmp_array = array('user_id' => $row["user_id"], 'event_name' => $row["event_name"], 'event_desc' => $row["event_desc"], 'event_date' => $row["event_date"]);
         array_push($user_all_event, $user_tmp_array);
     }
    //  print_r($user_all_event);
     $user_all_event = (object)$user_all_event;
     echo json_encode($user_all_event);
} else {
     echo "<br> 0 results";
}


?>
