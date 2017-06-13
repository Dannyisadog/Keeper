<?php
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
        $activity_name = "sadfadsf";
    }

    $query = "SELECT * FROM activity WHERE activity_name = '".$activity_name."'";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $activity_profile = array('activity_name' => $row["activity_name"], 'activity_place' => $row["activity_place"], 'activity_time' => $row["activity_time"], 'activity_host' => $row["activity_host"]);
        }
        echo json_encode($activity_profile);
    } else {
        echo "<br> 0 results";
    }
?>