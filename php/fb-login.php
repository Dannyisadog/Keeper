<?php
$fb = new Facebook\Facebook([
  'app_id' => '379512145767114',
  'app_secret' => '9d11c88737db8e63e5bf0b55d567d063',
  'default_graph_version' => 'v2.2',
  ]);

$helper = $fb->getRedirectLoginHelper();

$permissions = ['email']; // Optional permissions
$loginUrl = $helper->getLoginUrl('https://example.com/fb-callback.php', $permissions);

echo '<a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a>';
 ?>
