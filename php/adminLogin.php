<html>
<head>
    <title>Admin</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"> -->
    <link rel="stylesheet" href="../css/jquery-ui.css">
    <link href='../css/style.css' rel='stylesheet' />

    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src='../js/fb-ajax.js'></script>

    <style>
        body {
            color: rgb(249, 249, 249);
        }

        table {
            margin: 0 auto;
            color: rgb(249, 249, 249);
            font-family: Arial, Helvetica, sans-serif;
            font-size: 22px;
        }
        input[type=text], input[type=date] {
            font-family: Arial, Helvetica, sans-serif;
            /*position: fixed;*/
            margin : 0 auto;
            margin-top: 15px;
            padding: 6px;
            display: block;
            border: 1px solid #ccc;
            border-radius: 30px;
            box-sizing: border-box;
            font-size: 16px;
            size: 30;
        }
        .container {
            width: 30em;
            overflow-x: auto;
            white-space: nowrap;
        }

        #user-photo, #userPhoto{
            height: 20vw;
            width: 20vw;
            margin-top: 50px;
            margin-left: 50px;
            background-color: rgba(194, 238, 255, 0.52);
            float: left;
        }
        #user-name, #user-id, #user-email, #user-gender, #user-birthday, #user-phone{
            height: 3vw;
            width: 17vw;
            margin-top: 45px;
            margin-left: 65px;
            border-radius: 30px;
            float: left;
        }
        p.userInfo {
            font-size: 20px;
        }
    </style>
</head>

<body>
    <?php

    session_start();

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

    //get administrator login username & password
    if (isset($_POST["user"])){
        $user = $_POST["user"];
    }else{
        $user = "none";
    }

    if (isset($_POST["password"])){
        $password = $_POST["password"];
        $password = sha1($password);
    }else{
        $password = "none";
    }

    if ($user == "" || $password == ""){
        echo "error";
        session_destroy();
    }

    if ($user == "none" || $password == "none"){
        session_destroy();
    }

    $sql = "SELECT user, password FROM administrator";
    $result = $conn ->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            
            if ($user == $row["user"] && $password == $row["password"]){
                $isLogin = true;
                echo "<div class='page' id='firstPage' style='width:100vw; height: 100vh;'>";
                    echo "<ul id='menu-top'>";
                        echo "<li class='menu-left'><a href='../html/'>Keeper for admin</a></li>";
                        echo "<li class='menu-right' id='adminName' style='margin-top:5px;'>" . $user . "</li>";
                    echo "</ul>";

                    echo "<div id='admin-management' style='text-align:center;'>";

                        echo "<img src='' id='userPhoto' width='20vw' height='20vw'>";

                        echo "<div id='user-name'>";
                            echo "<p class='userInfo'>Name</p>";
                            echo "<input type='text' name='userName-info' size='30' disabled>";
                        echo "</div>";

                        echo "<div id='user-id'>";
                            echo "<p class='userInfo'>Id</p>";
                            echo "<input type='text' name='userId-info' size='30' disabled>";
                        echo "</div>";

                        echo "<div id='user-email'>";
                            echo "<p class='userInfo'>Email</p>";
                            echo "<input type='text' name='userEmail-info' size='30' disabled>";
                        echo "</div>";

                        echo "<div id='user-gender'>";
                            echo "<p class='userInfo'>Gender</p>";
                            echo "<input type='text' name='userGender-info' size='30' disabled>";
                        echo "</div>";

                        echo "<div id='user-birthday'>";
                            echo "<p class='userInfo'>Birthday</p>";
                            echo "<input type='text' name='userBirthday-info' size='30' disabled>";
                        echo "</div>";

                        echo "<div id='user-phone'>";
                            echo "<p class='userInfo'>Phone</p>";
                            echo "<input type='text' name='userPhone-info' size='30' disabled>";
                        echo "</div>";

                    echo "</div>";

                    echo "<div class='container' id='user-list'>";
                        echo "<div>";
                            echo "<h1>User</h1>";
                            echo "<input type='text' name='user-name' size='30' placeholder='search...'>";
                        echo "</div>";
                    echo "</div>";

                echo "</div>";

                echo "<div class='page' id='secondPage' style='width:100vw; height: 100vh;'>";

                    echo "<div class='container' id='admin-management-createActivity' style='text-align:center;'>";
                        echo "<h1>Create Activity</h1>";

                        echo "<p style='margin-top:50px;'>Name</p>";
                        echo "<input type='text' name='activityName' size='30' placeholder='Activity Name'>";

                        echo "<p style='margin-top:50px;'>Place</p>";
                        echo "<input type='text' name='activityPlace' size='30' placeholder='Activity Place'>";

                        echo "<p style='margin-top:50px;'>Time</p>";
                        echo "<input type='date' name='activityTime' size='30' placeholder='Activity Time'>";

                        echo "<p style='margin-top:50px;'>Host</p>";
                        echo "<input type='text' name='activityHost' size='30' placeholder='Activity Host' value='" . $user ."'disabled>";

                        echo "<button style='margin-top:50px;' onclick='createActivity()'>Create</button>";
                    echo "</div>";

                    echo "<div class='container' id='admin-management-activityInfo' style='text-align:center;'>";
                        echo "<h1>Activity Info</h1>";

                        echo "<p style='margin-top:50px;'>Name</p>";
                        echo "<input type='text' name='activityName-info' size='30' placeholder='Activity Name' disabled>";

                        echo "<p style='margin-top:50px;'>Place</p>";
                        echo "<input type='text' name='activityPlace-info' size='30' placeholder='Activity Place' disabled>";

                        echo "<p style='margin-top:50px;'>Time</p>";
                        echo "<input type='date' name='activityTime-info' size='30' placeholder='Activity Time' disabled>";

                        echo "<p style='margin-top:50px;'>Host</p>";
                        echo "<input type='text' name='activityHost-info' size='30' placeholder='Activity Host' value='" . $user ."'disabled>";
                    echo "</div>";

                    echo "<div class='container' id='activity-list'>";
                        echo "<div>";
                            echo "<h1>Current Activity</h1>";
                            echo "<input type='text' name='activity-name' size='30' placeholder='search...'>";
                        echo "</div>";
                    echo "</div>";
                echo "</div>";
            }
            else{
                echo "<p style='color: white;'>Login fail</p>";
                $isLogin = false;
                header("Location: ../html/");
            }
        }
    } else {
        echo "0 results";
    }

    if ($isLogin){
        echo "<script type='text/javascript'>";

            echo "function createActivity() {";
                echo "var activity_name = document.getElementsByName('activityName')[0].value;";
                echo "var activity_place = document.getElementsByName('activityPlace')[0].value;";
                echo "var activity_time = document.getElementsByName('activityTime')[0].value;";
                echo "var activity_host = document.getElementsByName('activityHost')[0].value;";

                echo "if (activity_name == '') {";
                    echo 'alert("Activity Name is Empty!!")';
                echo "}";
                echo "else if (activity_place == '') {";
                    echo 'alert("Activity Place is Empty!!")';
                echo "}";
                echo "else if (activity_time == '') {";
                    echo 'alert("Activity Time is Empty!!")';
                echo "}";
               
                echo "else if (activity_name != '' && activity_place != '' && activity_time != '' && activity_host != '') {";

                    echo "$.ajax({";
                        echo "async: false,";
                        echo "type: 'POST',";
                        echo "url: './createActivity.php',";
                        echo "data: {";
                            echo "activity_name: activity_name,";
                            echo "activity_place: activity_place,";
                            echo "activity_time: activity_time,";
                            echo "activity_host: activity_host,";
                        echo "},";
                        echo "success: function (result) {";
                            // echo "console.log(result);";
                            echo "if (result == 'Activity exits'){";
                                echo 'alert("Activiy already exists!\nPlease rename your activity!");';
                            echo "}";
                            echo "else {";
                                echo 'alert("Activiy create successfully!");';
                                echo "document.getElementsByName('activityName')[0].value = '';";
                                echo "document.getElementsByName('activityPlace')[0].value = '';";
                                echo "document.getElementsByName('activityTime')[0].value = '';";
                                echo "$('.activity-list-item').remove();";
                                echo "getActiviyProfile();";
                            echo "}";
                        echo "},"; 
                    echo "});";

                echo "}";

            echo "}";

            echo "function deleteActivity(activity_name) {";
                echo "$.ajax({";
                    echo "async: false,";
                    echo "type: 'POST',";
                    echo "url: './deleteActivity.php',";
                    echo "data: {";
                        echo "'activity_name': activity_name";
                    echo "},";
                    echo "success: function (result) {";
                        echo "console.log(result);";
                        echo "updateActivity();";
                    echo "}";
                echo "});";
            echo "}";

            echo "function updateActivity(){";
                echo "$('.activity-list-item').remove();";
                echo "getActiviyProfile();";
            echo "}";

            echo "function addToActivityList(activity_name) {";
                echo "var listdiv = document.createElement('div');";

                echo "listdiv.style.width = '18vw';";
                echo "listdiv.style.height = '6vh';";
                echo "listdiv.style.marginLeft = 'auto';";
                echo "listdiv.style.marginRight = 'auto';";
                echo "listdiv.style.marginTop = '20px';";
                echo "listdiv.style.marginBottom = '20px';";
                echo "listdiv.style.borderRadius = '10px';";
                echo "listdiv.style.backgroundColor = 'rgba(255, 238, 194, 0.52)';";
                echo "listdiv.style.color = 'rgb(249, 249, 249)';";

                echo "listdiv.setAttribute('class', 'activity-list-item');";
                echo "listdiv.setAttribute('id', activity_name.textContent);";

                echo "var listActivityName = document.createElement('p');";
                echo "var infoButton = document.createElement('button');";
                echo "var infoButtonText = document.createTextNode('Info');";
                echo "var delButton = document.createElement('button');";
                echo "var delButtonText = document.createTextNode('Delete');";
                
                echo "listActivityName.style.textAlign = 'center';";
                echo "listActivityName.style.margin = '0px';";
                echo "infoButton.style.float = 'right';";
                echo "infoButton.appendChild(infoButtonText);";
                echo "delButton.style.float = 'right';";
                echo "delButton.appendChild(delButtonText);";


                echo "listActivityName.appendChild(activity_name);";

                echo "listdiv.appendChild(delButton);";
                echo "listdiv.appendChild(listActivityName);";
                echo "listdiv.appendChild(infoButton);";

                echo "$(infoButton).click(e => {";
                    echo "getOneActivityProfileFromDB(activity_name.textContent);";
                echo "});";

                echo "$(delButton).click(e => {";
                    echo "deleteActivity(activity_name.textContent);";
                echo "});";

                echo "document.getElementById('activity-list').appendChild(listdiv);";
            echo "}";

            echo "function displayActivityInfo(activity_name, activity_place, activity_time, activity_host) {";
                    // echo "console.log(activity_name);";
                    // echo "console.log(activity_place);";
                    // echo "console.log(activity_time);";
                    // echo "console.log(activity_host);";

                    echo "document.getElementsByName('activityName-info')[0].value = activity_name;";
                    echo "document.getElementsByName('activityPlace-info')[0].value = activity_place;";
                    echo "document.getElementsByName('activityTime-info')[0].value = activity_time;";
                    echo "document.getElementsByName('activityHost-info')[0].value = activity_host;";
            echo "}";

            echo "function displayUserInfo(user_name, user_id, user_email, user_gender, user_photo) {";

                    echo "document.getElementsByName('userName-info')[0].value = user_name;";
                    echo "document.getElementsByName('userId-info')[0].value = user_id;";
                    echo "document.getElementsByName('userEmail-info')[0].value = user_email;";
                    echo "document.getElementsByName('userGender-info')[0].value = user_gender;";
                    echo "document.getElementById('userPhoto').src = user_photo;";

            echo "}";

            echo "function getOneActivityProfileFromDB(activity_name) {";
                // echo "console.log(activity_name);";
                echo "$.ajax({";
                    echo "async: false,";
                    echo "type: 'POST',";
                    echo "url: './getOneActivityProfile.php',";
                    echo "dataType: 'json',";
                    echo "data: {";
                        echo "activity_name: activity_name";
                    echo "},";
                    echo "success: function (result) {";
                        echo "console.log(result);";
                        echo "var activity_name = result.activity_name;";
                        echo "var activity_place = result.activity_place;";
                        echo "var activity_time = result.activity_time;";
                        echo "var activity_host = result.activity_host;";
                        
                        echo "displayActivityInfo(activity_name, activity_place, activity_time, activity_host);";
                        
                    echo "},";
                    echo "error: function(textStatus, errorThrown) { ";
                        echo 'alert("Status: " + textStatus); alert("Error: " + errorThrown); ';
                    echo "}";     
                echo "});";
            echo "}";

            echo "function getActiviyProfile(){";
                echo "$.ajax({";
                    echo "async: false,";
                    echo "type: 'GET',";
                    echo "url: './getActivityProfile.php',";
                    echo "dataType: 'json',";
                    echo "data: {";
                        echo "adminGetAllActivityProfile:''";
                    echo "},";
                    echo "success: function (result) {";
                        //echo " console.log(result);";

                        echo "for (var i = 0; i < Object.keys(result).length; i++) {";
                            echo "var activityName = document.createTextNode(result[i].activity_name);";
                            //echo "console.log(activityName);";
                            echo "addToActivityList(activityName);";
                        echo "}";

                    echo "},";
                echo "});";
            echo "}";

            echo "function addToUserList(user_name, user_id) {";
                echo "var listdiv = document.createElement('div');";

                echo "listdiv.style.width = '18vw';";
                echo "listdiv.style.height = '6vh';";
                echo "listdiv.style.marginLeft = 'auto';";
                echo "listdiv.style.marginRight = 'auto';";
                echo "listdiv.style.marginTop = '20px';";
                echo "listdiv.style.marginBottom = '20px';";
                echo "listdiv.style.borderRadius = '10px';";
                echo "listdiv.style.backgroundColor = 'rgba(194, 238, 255, 0.52)';";
                echo "listdiv.style.color = 'rgb(249, 249, 249)';";

                echo "listdiv.setAttribute('class', 'home-list-item');";
                echo "listdiv.setAttribute('id', user_name.textContent);";

                echo "var listUserName = document.createElement('p');";
                echo "var listUserId = document.createElement('p');";
                echo "var infoButton = document.createElement('button');";
                echo "var infoButtonText = document.createTextNode('Info');";

                
                echo "listUserName.style.textAlign = 'center';";
                echo "listUserName.style.margin = '0px';";
                echo "listUserId.style.textAlign = 'center';";
                echo "listUserId.style.marginTop = '10px';";
                echo "infoButton.style.float = 'right';";
                echo "infoButton.appendChild(infoButtonText);";

                echo "listUserName.appendChild(user_name);";
                echo "listUserId.appendChild(user_id);";

                echo "listdiv.appendChild(listUserName);";
                echo "listdiv.appendChild(infoButton);";
                echo "listdiv.appendChild(listUserId);";

                echo "$(infoButton).click(e => {";
                    echo "getOneUserProfileFromDB(user_id.textContent);";
                echo "});";

                echo "document.getElementById('user-list').appendChild(listdiv);";
            echo "}";

            echo "function getOneUserProfileFromDB(user_id) {";
                //echo "console.log(user_id);";
                echo "$.ajax({";
                    echo "async: false,";
                    echo "type: 'POST',";
                    echo "url: './getOneUserProfile.php',";
                    echo "dataType: 'json',";
                    echo "data: {";
                        echo "user_id: user_id";
                    echo "},";
                    echo "success: function (result) {";
                        echo "console.log(result);";
                        echo "var user_name = result.user_name;";
                        echo "var user_id = result.user_id;";
                        echo "var user_email = result.user_email;";
                        echo "var user_gender = result.user_gender;";
                        echo "var user_photo = result.user_photo;";
                        
                        echo "displayUserInfo(user_name, user_id, user_email, user_gender, user_photo);";
                    echo "},";
                echo "});";
            echo "}";

            echo "function getUserProfile(){";
                echo "$.ajax({";
                    echo "async: false,";
                    echo "type: 'GET',";
                    echo "url: './getUserProfile.php',";
                    echo "dataType: 'json',";
                    echo "data: {";
                        echo "adminGetAllUserProfile:''";
                    echo "},";
                    echo "success: function (result) {";
                        //echo " console.log(result);";

                        echo "for (var i = 0; i < Object.keys(result).length; i++) {";
                            echo "var userName = document.createTextNode(result[i].user_name);";
                            echo "var userId = document.createTextNode(result[i].user_id);";
                            //echo "console.log(userName);";
                            //echo "console.log(userId);";
                            echo "addToUserList(userName, userId);";
                        echo "}";

                    echo "},";
                echo "});";
            echo "}";

            echo "getActiviyProfile();";
            echo "getUserProfile();";
        echo "</script>";
    }

    $conn->close();    
?>
</body>

</html>