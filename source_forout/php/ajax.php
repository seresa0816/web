<?php

	switch ($_REQUEST["mode"]) 
	{
		case 'image' :
		default :
			$fname = "image_".time().".png";
			
			$uri = substr($_REQUEST["data"],strpos($_REQUEST["data"], ",") + 1);
			file_put_contents("../tmp/".$fname, base64_decode($uri));

			echo $fname;
		break;
	}

?>