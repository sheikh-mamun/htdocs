<?php
	$db = new mysqli("localhost","root","","test");
	
	if(isset($_POST["combo"])){
		$combo_id = $_POST["combo"];
		$result = $db->query("select id,name from districts where division_id='$combo_id'");
		while(list($id,$name)=$result->fetch_row()){
			echo "<option value='$id'>$name</option>";
		}		
	}


?>