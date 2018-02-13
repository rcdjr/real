<?php
	header('P3P: CP="NOI ADM DEV PSAi COM NAV OUR OTRo STP IND DEM"');
	/********************************************************************
				MEDIDIAS ANTI CACHE
	********************************************************************/

	header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");    // Date in the past
	header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
	header("Cache-Control: no-store, no-cache, must-revalidate");  // HTTP/1.1
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");                          // HTTP/1.0

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	session_name("AOL");
	session_id($id_sessao);
	session_start();
?>
