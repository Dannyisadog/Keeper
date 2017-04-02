function isLogin() {
    $.get("../php/fb-login.php", {},
        function(data, status) {
            if (data == 'Login') {
                // console.log("Login Status: " + data + "\nStatus: " + status);
                createLogOutButton('fb-logout', 'Facebook Logout');
            } else {
                // console.log("Login Status: Logout\nStatus: " + status);
                createLogInButton('fb-login', 'Facebook Login');
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
        success: function(result) {
            // console.log(result);
            console.log("name:" + result.name);
            console.log("first_name: " + result.first_name);
            console.log("last_name: " + result.last_name);
            console.log("email: " + result.email);
            console.log("user_id: " + result.id);
        },
    });
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

function createLogInButton(id, text) {
    var loginButton = document.createElement('button');
    var loginButtonText = document.createTextNode(text);

    loginButton.setAttribute('id', id);

    loginButton.appendChild(loginButtonText);

    $(loginButton).click(e => {
        $.ajax({
            url: "../php/fb-login.php",
            success: function(result) {
                // console.log(result);
                // console.log("Login");
                window.location.href = result;
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
            success: function(result) {
                // console.log(result);
                // console.log("Logout");
            }
        });
        window.location.href = "../php/fb-logout.php"
    });
    document.getElementById('loginButtonLi').appendChild(logoutButton);
}
