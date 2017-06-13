function addAllActivityToUser(activity_name) {
    if (myLoginStatus == "Login") {
        var listdiv = document.createElement('div');

        listdiv.setAttribute('class', 'allActivity-list-item');

        listdiv.style.width = '25vw';
        listdiv.style.height = '6vh';
        listdiv.style.marginLeft = 'auto';
        listdiv.style.marginRight = 'auto';
        listdiv.style.marginTop = '20px';
        listdiv.style.marginBottom = '20px'
        listdiv.style.borderRadius = '10px';
        listdiv.style.backgroundColor = 'rgba(255, 238, 194, 0.52)';
        listdiv.style.color = 'rgb(249, 249, 249)';

        var listActivityName = document.createElement('p');
        var listActivityJoin = document.createElement('button');
        var listActivityInfo = document.createElement('button');

        listActivityJoin.setAttribute('id', activity_name.textContent);

        if (isJoin(activity_name.textContent) == "true") {
            var listActivityJoinText = document.createTextNode('Abort');
        }
        else if (isJoin(activity_name.textContent) == "false") {
            var listActivityJoinText = document.createTextNode('Join');
        }

        var listActivityInfoText = document.createTextNode('Info');

        listActivityName.style.textAlign = 'center';
        listActivityName.style.fontSize = '20px';
        listActivityName.style.margin = '0px';
        listActivityJoin.style.float = 'right';
        listActivityInfo.style.float = 'right';

        listActivityJoin.appendChild(listActivityJoinText);
        listActivityInfo.appendChild(listActivityInfoText);

        listActivityName.appendChild(activity_name);

        listdiv.appendChild(listActivityJoin);
        listdiv.appendChild(listActivityName);
        listdiv.appendChild(listActivityInfo);

        $(listActivityInfo).click(e => {
            getOneActivityInfo(activity_name.textContent);
        });

        $(listActivityJoin).click(e => {
            if (listActivityJoin.textContent == "Join") {
                getAndjoinActivity(activity_name.textContent);
            }
            else if (listActivityJoin.textContent == "Abort") {
                abortActivity(activity_name.textContent);
            }
        });

        document.getElementById('user-allActivity').appendChild(listdiv);
    }
}

function addActivityToUser(activity_name) {
    if (myLoginStatus == "Login") {
        var listdiv = document.createElement('div');

        listdiv.setAttribute('class', 'userActivity-list-item');

        listdiv.style.width = '18vw';
        listdiv.style.height = '6vh';
        listdiv.style.marginLeft = 'auto';
        listdiv.style.marginRight = 'auto';
        listdiv.style.marginTop = '20px';
        listdiv.style.marginBottom = '20px'
        listdiv.style.borderRadius = '10px';
        listdiv.style.backgroundColor = 'rgba(255, 238, 194, 0.52)';
        listdiv.style.color = 'rgb(249, 249, 249)';

        var listActivityName = document.createElement('p');
        var listActivityAbort = document.createElement('button');
        var listActivityInfo = document.createElement('button');

        listActivityAbort.setAttribute('id', activity_name);

        var listActivityInfoText = document.createTextNode('Info');
        var listActivityAbortText = document.createTextNode('Abort');

        listActivityName.style.textAlign = 'center';
        listActivityName.style.fontSize = '20px';
        listActivityName.style.margin = '0px';
        listActivityAbort.style.float = 'right';
        listActivityInfo.style.float = 'right';

        listActivityAbort.appendChild(listActivityAbortText);
        listActivityInfo.appendChild(listActivityInfoText);

        listActivityName.appendChild(activity_name);

        listdiv.appendChild(listActivityAbort);
        listdiv.appendChild(listActivityName);
        listdiv.appendChild(listActivityInfo);

        $(listActivityInfo).click(e => {
            getOneActivityInfo(activity_name.textContent);
        });

        $(listActivityAbort).click(e => {
            abortActivity(activity_name.textContent);
        });

        document.getElementById('myActivity-list').appendChild(listdiv);
    }
}

function getAndjoinActivity(activity_name) {
    if (myLoginStatus == "Login") {
        $.ajax({
            async: false,
            type: 'POST',
            url: '../php/getOneActivityProfile.php',
            dataType: 'json',
            data: {
                'activity_name': activity_name
            },
            success: function (result) {
                // console.log(result);
                var activity_name = result.activity_name;
                var activity_place = result.activity_place;
                var activity_time = result.activity_time;
                var activity_host = result.activity_host;

                joinActivity(activity_name, activity_place, activity_time, activity_host);
            },
            error: function (exception) {
                // console.log(exception);
            },
        });
    }
}

function isJoin(activity_name) {
    var isJoin = false;
    if (myLoginStatus == "Login") {
        $.ajax({
            async: false,
            type: 'POST',
            url: '../php/isJoin.php',
            data: {
                'activity_name': activity_name,
                'activity_user': user_id
            },
            success: function (result) {
                // console.log(result);
                isJoin = result;
            },
        });
    }
    return isJoin;
}

function getUserActivity(){
    if (myLoginStatus == "Login") {
        $.ajax({
            async: false,
            type: 'POST',
            url: '../php/getUserActivity.php',
            data: {
                'user_id': user_id
            },
            dataType: 'json',
            success: function (result) {
                console.log(result);
                var activity_name = result.activity_name;

                for (var i = 0; i < Object.keys(result).length; i++) {
                    var activity_name = document.createTextNode(result[i].activity_name);
                    addActivityToUser(activity_name);
                }
            },
        });
    }
}

function updateUserActivity() {
    $('.userActivity-list-item').remove();
    getUserActivity();
}


function joinActivity(activity_name, activity_place, activity_time, activity_host) {
    if (myLoginStatus == "Login") {
        $.ajax({
            async: false,
            type: 'POST',
            url: '../php/joinActivity.php',
            data: {
                'activity_name': activity_name,
                'activity_place': activity_place,
                'activity_time': activity_time,
                'activity_host': activity_host,
                'activity_user': user_id
            },
            success: function (result) {
                console.log(result);
                document.getElementById(activity_name).innerHTML = "Abort";
                alert("Join Successfully!");
                updateUserActivity();
            },
            error: function (exception) {
                // console.log(exception);
            },
        });
    }
}

function abortActivity(activity_name) {
    if (myLoginStatus == "Login") {
        $.ajax({
            async: false,
            type: 'POST',
            url: '../php/abortActivity.php',
            dataType: 'json',
            data: {
                'activity_name': activity_name,
                'activity_user': user_id
            },
            success: function (result) {
                // console.log(result);
            },
            error: function (exception) {
                // console.log(exception);
                document.getElementById(activity_name).innerHTML = "Join";
                alert("Abort Successfully!");
                updateUserActivity();
            },
        });
    }
}


function displayActivityInfo(activity_name, activity_place, activity_time, activity_host) {
    document.getElementsByName('activityName-info')[0].value = activity_name;
    document.getElementsByName('activityPlace-info')[0].value = activity_place;
    document.getElementsByName('activityTime-info')[0].value = activity_time;
    document.getElementsByName('activityHost-info')[0].value = activity_host;
}

function getOneActivityInfo(activity_name) {
    if (myLoginStatus == "Login") {
        $.ajax({
            async: false,
            type: 'POST',
            url: '../php/getOneActivityProfile.php',
            dataType: 'json',
            data: {
                'activity_name': activity_name
            },
            success: function (result) {
                // console.log(result);
                var activity_name = result.activity_name;
                var activity_place = result.activity_place;
                var activity_time = result.activity_time;
                var activity_host = result.activity_host;

                displayActivityInfo(activity_name, activity_place, activity_time, activity_host);
            },
            error: function (exception) {
                // console.log(exception);
            },
        });
    }
}

function downloadAllActivity() {
    if (myLoginStatus == "Login") {
        $.ajax({
            async: false,
            type: 'GET',
            url: '../php/getAllActivity.php',
            dataType: 'json',
            data: {
                allActivity: ''
            },
            success: function (result) {
                //   console.log(result);
                for (var i = 0; i < Object.keys(result).length; i++) {

                    var activityName = document.createTextNode(result[i].activity_name);
                    var activityPlace = document.createTextNode(result[i].activity_place);
                    var activityTime = document.createTextNode(result[i].activity_time);
                    var activityHost = document.createTextNode(result[i].activity_host);

                    addAllActivityToUser(activityName);
                }
            },
        });
    }
}