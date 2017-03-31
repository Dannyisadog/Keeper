function isLogin() {
    $.post("../php/fb-login.php", {

        },
        function(data, status) {
            if (data == 'Login') {
                console.log("Login Status: " + data + "\nStatus: " + status);
                createLogOutButton('fb-logout', 'Facebook Logout');
            } else {
                console.log("Login Status: Logout\nStatus: " + status);
                createLogInButton('fb-login', 'Facebook Login');
            }
        });
}

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

    document.getElementById('menu-top').appendChild(loginButton);
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

    document.getElementById('menu-top').appendChild(logoutButton);
}
