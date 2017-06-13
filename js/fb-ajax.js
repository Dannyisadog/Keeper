function isLogin() {
    $.get("../php/fb-login.php", {},
        function (data, status) {
            if (data == 'Login') {
                // console.log("Login Status: " + data + "\nStatus: " + status);
                var profileLink = document.createElement('a');
                var profileLinkText = document.createTextNode(user_name);

                var profilePhoto = document.createElement('img');
                profilePhoto.setAttribute("src", user_photo);

                profilePhoto.setAttribute("width", "30");
                profilePhoto.setAttribute("height", "30");
                profilePhoto.style.marginTop = '3px';

                profileLink.appendChild(profileLinkText);
                profileLink.href = "../html/userProfile.html";

                document.getElementById("userName").appendChild(profileLink);
                document.getElementById("userPhoto").appendChild(profilePhoto);

                createLogOutButton('fb-logout', 'Facebook Logout');
                updateEvent();
            } else {
                // console.log("Login Status: Logout\nStatus: " + status);
                createLogInButton('fb-login', 'Facebook Login');
                $('.home-list-item').remove();
                $('.home-calendar-item').remove();
            }
        });
}

function getUserProfile() {
    $.ajax({
        type: 'POST',
        url: '../php/fb-login.php',
        data: 'userProfile',
        dataType: 'json',
        cache: false,
        success: function (result) {
            // console.log(result);
            // console.log("name:" + result.name);
            // console.log("first_name: " + result.first_name);
            // console.log("last_name: " + result.last_name);
            // console.log("email: " + result.email);
            // console.log("user_id: " + result.id);
        },
    });
}

function createUser() {
    if (myLoginStatus == 'Login') {
        $.ajax({
            type: 'POST',
            url: '../php/createUser.php',
            data: {
                "user_id": user_id,
                "user_name": user_name,
                "user_email": user_email,
                "user_photo": user_photo,
                "user_gender": user_gender
            },
            cache: false,
            success: function (result) {
                // console.log(result);
            },
        });
    }
}

var myLoginStatus = function () {
    var loginStatus = null;
    $.ajax({
        async: false,
        type: 'POST',
        url: '../php/fb-login.php',
        data: 'logstatus',
        cache: false,
        'success': function (data) {
            loginStatus = data;
        }
    });
    return loginStatus;
}();

var user_name = function () {
    var name = null;
    $.ajax({
        async: false,
        type: 'POST',
        url: '../php/fb-login.php',
        data: 'userProfile',
        dataType: 'json',
        cache: false,
        'success': function (data) {
            name = data.name;
        }
    });
    return name;
}();

var user_email = function () {
    var email = null;
    $.ajax({
        async: false,
        type: 'POST',
        url: '../php/fb-login.php',
        data: 'userProfile',
        dataType: 'json',
        cache: false,
        'success': function (data) {
            email = data.email;
        }
    });
    return email;
}();

var user_id = function () {
    var id = null;
    $.ajax({
        async: false,
        type: 'POST',
        url: '../php/fb-login.php',
        data: 'userProfile',
        dataType: 'json',
        cache: false,
        'success': function (data) {
            id = data.id;
        }
    });
    return id;
}();

var user_photo = function () {
    var photo = null;
    $.ajax({
        async: false,
        type: 'POST',
        url: '../php/fb-login.php',
        data: 'userProfile',
        dataType: 'json',
        cache: false,
        'success': function (data) {
            photo = data.picture.url;
        }
    });
    return photo;
}();

var user_gender = function () {
    var gender = null;
    $.ajax({
        async: false,
        type: 'POST',
        url: '../php/fb-login.php',
        data: 'userProfile',
        dataType: 'json',
        cache: false,
        'success': function (data) {
            gender = data.gender;
        }
    });
    return gender;
}();

function createLogInButton(id, text) {
    var loginButton = document.createElement('button');
    var loginButtonText = document.createTextNode(text);

    loginButton.setAttribute('id', id);

    loginButton.appendChild(loginButtonText);

    $(loginButton).click(e => {
        $.ajax({
            url: "../php/fb-login.php",
            success: function (result) {
                // console.log(result);
                // console.log("Login");
                window.location.href = result;
                //console.log(result);
            }
        });
    });
    document.getElementById('loginButtonLi').appendChild(loginButton);
}

function createLogOutButton(id, text) {
    var logoutButton = document.createElement('button');
    var logoutButtonText = document.createTextNode(text);

    logoutButton.setAttribute('id', id);

    logoutButton.appendChild(logoutButtonText);

    $(logoutButton).click(e => {
        $.ajax({
            url: "../php/fb-logout.php",
            success: function (result) {
                // console.log(result);
                // console.log("Logout");
            }
        });
        window.location.href = "../php/fb-logout.php"
    });
    document.getElementById('loginButtonLi').appendChild(logoutButton);
}
