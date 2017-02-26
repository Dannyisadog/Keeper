window.fbAsyncInit = function() {
    FB.init({
        appId: '379512145767114',
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            // document.getElementById('status').innerHTML = "We are connected.";
        } else if (response.status === 'not_authorized') {
            // document.getElementById('status').innerHTML = "We are not logged in.";
        } else {
            // document.getElementById('status').innerHTML = "You are not logged into Facebook";
        }
    });
};

// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//         return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.8&appId=196080834184167";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            // document.getElementById('status').innerHTML = "We are connected.";
        } else if (response.status === 'not_authorized') {
            // document.getElementById('status').innerHTML = "We are not logged in.";
        } else {
            // document.getElementById('status').innerHTML = "You are not logged into Facebook";
        }
    });
}

function logOut() {
    FB.logout(function(response) {
        if (response.status === 'connected') {
            // document.getElementById('status').innerHTML = "We are connected.";
        } else if (response.status === 'not_authorized') {
            // document.getElementById('status').innerHTML = "We are not logged in.";
        } else {
            // document.getElementById('status').innerHTML = "You are not logged into Facebook";
        }
    });
}
