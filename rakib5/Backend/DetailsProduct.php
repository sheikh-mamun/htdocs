<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli('localhost','root','','furni');
$id=$_GET['id'];
$data=$con->query('select * from 	products2 where id='.$id)->fetch_assoc();
header('Content-Type: Application/json');
echo json_encode($data);