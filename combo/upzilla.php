<?php
	$db = new mysqli("localhost","root","","test");
	
	if(isset($_POST["district_id"])){
		$district_id = $_POST["district_id"];
		$result2 = $db->query("select id, name from upazilas where district_id='$district_id'");
		while(list($_id,$_name)=$result2->fetch_row()){
			
			echo "<option value='$_id'>$_name<option>";
		}		
	}

?>