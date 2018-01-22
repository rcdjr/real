<?php 

include_once("index.html");

header("HTTP/1.1 301 Moved Permanently");
header("Location: http://contrealteste.pessoal.ws/one-page/index.html ");
exit();

?>