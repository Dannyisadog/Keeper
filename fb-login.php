<?php

session_start();
require_once __DIR__ . './../vendor/autoload.php';
$fb = new Facebook\Facebook([
  'app_id' => '379512145767114', // Replace {app-id} with your app id
  'app_secret' => '9d11c88737db8e63e5bf0b55d567d063',
  'default_graph_version' => 'v2.5',
  ]);
$helper = $fb->getRedirectLoginHelper();
$permissions = ['public_profile','email']; // optional


try {
    if (isset($_SESSION['facebook_access_token'])) {
        $accessToken = $_SESSION['facebook_access_token'];
    } else {
        $accessToken = $helper->getAccessToken();
    }
} catch (Facebook\Exceptions\FacebookResponseException $e) {
    // When Graph returns an error
    echo 'Graph returned an error: ' . $e->getMessage();
    exit;
} catch (Facebook\Exceptions\FacebookSDKException $e) {
    // When validation fails or other local issues
    echo 'Facebook SDK returned an error: ' . $e->getMessage();
    exit;
}
if (isset($accessToken)) {
    if (isset($_SESSION['facebook_access_token'])) {
        $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
    } else {
        // getting short-lived access token
        $_SESSION['facebook_access_token'] = (string) $accessToken;
        // OAuth 2.0 client handler
        $oAuth2Client = $fb->getOAuth2Client();
        // Exchanges a short-lived access token for a long-lived one
        $longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($_SESSION['facebook_access_token']);
        $_SESSION['facebook_access_token'] = (string) $longLivedAccessToken;
        // setting default access token to be used in script
        $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
    }
    // redirect the user back to the same page if it has "code" GET variable
    if (isset($_GET['code'])) {
        header('Location: ../html/');
    }

    // getting basic info about user
    try {
        $profile_request = $fb->get('/me?fields=name,first_name,last_name,email');
        $profile = $profile_request->getGraphNode()->asArray();
    } catch (Facebook\Exceptions\FacebookResponseException $e) {
        // When Graph returns an error
        echo 'Graph returned an error: ' . $e->getMessage();
        session_destroy();
        // redirecting user back to app login page
        header("Location: ../html/");
        exit;
    } catch (Facebook\Exceptions\FacebookSDKException $e) {
        // When validation fails or other local issues
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
    }
    if (isset($_POST['logstatus'])){
      echo "Login";
      return;
    }
    if (isset($_POST['userProfile'])){
      // print_r($profile);
      echo json_encode($profile);
      return;
    }
    echo "Login";
    // printing $profile array on the screen which holds the basic info about user
    // print_r($profile[0]);
    // echo "<br><a href='./fb-logout.php'>Logout with facebook</a>";
    // Now you can redirect to another page and use the access token from $_SESSION['facebook_access_token']
} else {
    // replace your website URL same as added in the developers.facebook.com/apps e.g. if you used http instead of https and you used non-www version or www version of your website then you must add the same here
    //$loginUrl = $helper->getLoginUrl('http://localhost/Keeper/php/fb-login.php', $permissions);
    $loginUrl = $helper->getLoginUrl('http://dannykeeper.tk/Keeper/php/fb-login.php', $permissions);
    // echo '<a href="' . $loginUrl . '">Log in with Facebook!</a><br>';
    if (isset($_POST['logstatus'])){
      echo "Logout";
      return;
    }
    echo $loginUrl;
}
?>
