<?
	header('P3P: CP="NOI ADM DEV PSAi COM NAV OUR OTRo STP IND DEM"');
	session_name("AOL");
	session_start();
	
	$_SESSION = array();
	session_destroy();
	$_SESSION['aol'] == '';

?>
<script>
	alert ('Sessão Área Online encerrada. Caso necessite, por favor faça o login novamente. ');
	window.top.location.href = 'http://<? echo $_SERVER['SERVER_NAME']; ?>';
</script>
