<?php 

include_once("index.html");

header("HTTP/1.1 301 Moved Permanently");
header("Location: https://contreal.herokuapp.com/one-page/index.html/deploy/public_html/index.html ");
exit();

?>