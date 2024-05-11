

<h3>Division Names</h3>
<select id="div_names">
	<?php
		$db = new mysqli("localhost","root","","test");
		$result = $db->query("select id,name from divisions");
		while(list($id,$name)=$result->fetch_row()){
		echo "<option value='$id'>$name</option>";
		}
	?>
</select>
<br>
<br>
<h3>District Names</h3>
<select id="dist_names">
	<option value=''>select</option>
</select>
<br>
<br>
<h3>Thana Names</h3>
<select id="upzilla_names">
	<option value=''>select</option>
</select>





<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script>
	$(function(){
		
		$("#div_names").change(function(){
			$.ajax({
				url:"query.php",
				type:"post",
				data:{"combo":$(this).val()},
				success: function(data){
					$("#dist_names").html(data);
				}
			});			
		});
		
		$("#dist_names").change(function(){
			$.ajax({
				url:"upzilla.php",
				type:"post",
				data:({"district_id":$(this).val()}),
				success: function(data){
					$("#upzilla_names").html(data);
				}
			});			
		});
	});
</script>