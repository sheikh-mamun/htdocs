<?php 
// Establish database connection
$db = new mysqli('localhost', 'root', '', 'company');

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

// If manufacturer form is submitted
if(isset($_POST['btnAddManufacturer'])){
	$mname = $_POST['mname'];
	$address = $_POST['address'];
	$contact = $_POST['contact'];
	
	// Call add_manufacturer stored procedure
	$db->query("CALL add_manufacturer('$mname', '$address', '$contact')");
}

// If product form is submitted
if(isset($_POST['btnAddProduct'])){
	$pname = $_POST['pname'];
	$price = $_POST['price'];
	$mid = $_POST['manufac'];
	
	// Call add_product stored procedure
	$db->query("CALL add_Product('$pname', $price, $mid)");
}
?>

<!-- HTML form for adding manufacturer -->
<h3>Add Manufacturer</h3>
<form action="#" method="post">
	<label for="mname">Name:</label><br>
	<input type="text" id="mname" name="mname"><br>
	<label for="address">Address:</label><br>
	<input type="text" id="address" name="address"><br>
	<label for="contact">Contact:</label><br>
	<input type="text" id="contact" name="contact"><br>
	<input type="submit" name="btnAddManufacturer" value="Add Manufacturer">
</form>

<!-- HTML form for adding product -->
<h3>Add Product</h3>
<form action="#" method="post">
	<label for="pname">Name:</label><br>
	<input type="text" id="pname" name="pname"><br>
	<label for="price">Price:</label><br>
	<input type="text" id="price" name="price"><br>
	<label for="manufac">Manufacturer:</label><br>
	<select name="manufac">
		<?php 
		// Fetch manufacturers from database
		<td>
				<select name="manufac">
					<?php 
						$manufac = $db->query("SELECT * FROM Manufacturer");
						while(list($_mid,$_mname) = $manufac->fetch_row()){
							echo "<option value='$_mid'>$_mname</option>";
						}
					?>
				</select>
			</td>
	</select><br>
	<input type="submit" name="btnAddProduct" value="Add Product">
</form>
