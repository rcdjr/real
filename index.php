<?php 

include_once("deploy/public_html/index.html");


header("HTTP/1.1 301 Moved Permanently");
header("Location: https://contreal.herokuapp.com/deploy/public_html/index.html ");
exit();


?>