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
        $activity_name = "activity_name";
    }

    if (isset($_POST['activity_user'])){
        $activity_user = $_POST['activity_user'];
    }else{
        $activity_user = "activity_user";
    }

    $query = "SELECT * FROM user_activity WHERE activity_name = '$activity_name' AND activity_user = '$activity_user'";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo "true";
    } else {
        echo "false";
    }
?>