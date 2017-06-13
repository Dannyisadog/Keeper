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

    if (isset($_POST['user_id'])){
        $user_id = $_POST['user_id'];
    }else{
        $user_id = "1215557605209132";
    }

    $query = "SELECT * FROM user WHERE user_id = $user_id";

    $result = $conn->query($query);

    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $user_profile = array('user_name' => $row["user_name"], 'user_id' => $row["user_id"], 'user_email' => $row["user_email"], 'user_photo' => $row["user_photo"], 'user_gender' => $row["user_gender"]);
        }
        echo json_encode($user_profile);
    } else {
        echo "<br> 0 results";
    }
?>