<?php



$db = new mysqli('localhost','root','','company');

if(isset($_POST['btnSubmit'])){
	$mname = $_POST['mname'];
	$address = $_POST['address']; 
	$contact = $_POST['contact'];
	$db->query("CALL add_manufacturer('$mname','$address','$contact')");
}

if(isset($_POST['addproduct'])){
	$pname = $_POST['pname'];
	$price = $_POST['price'];
	$mid = $_POST['manufac'];
	$db->query("CALL add_product('$pname','$price','$mid')"); // Removed single quotes around $price and $mid
}

?>

<h3>Manufacturer table</h3>
<form action="#" method="post">
	<table>
		<tr>
			<td><label for="mname">Name</label></td>
			<td><input type="text" name="mname"/></td>
		</tr>
		<tr>
			<td><label for="address">Address</label></td> <!-- Added address field -->
			<td><input type="text" name="address"/></td> <!-- Added address field -->
		</tr>
		<tr>
			<td><label for="contact">Contact</label></td>
			<td><input type="text" name="contact" /></td>
		</tr>
		<tr> 
			<td></td>
			<td><input type="submit" name="btnSubmit" value="submit" /></td>
		</tr>
	</table>
</form>

<h3>Product table</h3>
<form action="#" method="post">
	<table>
		<tr>
			<td><label for="pname">Name</label></td>
			<td><input type="text" name="pname" /></td>
		</tr>
		<tr>
			<td><label for="price">Price</label></td>
			<td><input type="text" name="price" /></td>
		</tr>
		<tr>
			<td><label for="manufac">Manufacturer Name</label></td>
			<td>
				<select name="manufac">
					<?php 
						$manufac = $db->query("SELECT * FROM manufacturer");
						while(list($_mid,$_mname) = $manufac->fetch_row()){
							echo "<option value='$_mid'>$_mname</option>";
						}
					?>
				</select>
			</td>
		</tr>
		<tr> 
			<td></td>
			<td><input type="submit" name="addproduct" value="submit" /></td>
		</tr>
	</table>
</form>

<h3>View Product</h3>

<table border="1" style="border-collapse: collapse;" > 
	<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Address</th>
		<th>Contact No</th>
		<th>Pid</th>
		<th>Pname</th>
		<th>Price</th>
		<th>Manufacturer Id</th>
	</tr>

	<?php
	$product = $db->query("SELECT * FROM viewcompanydata");
	while(list($_id,$_name,$_address,$_contact,$_pid,$_pname,$_price,$_manufactuer) = $product->fetch_row()){
		echo "<tr> 
				<td>$_id</td>
				<td>$_name</td>
				<td>$_address</td>
				<td>$_contact</td>
				<td>$_pid</td>
				<td>$_pname</td>
				<td>$_price</td>
				<td>$_manufactuer</td>
			</tr>";
	}
	
	
	
	?>


		
	</table>
