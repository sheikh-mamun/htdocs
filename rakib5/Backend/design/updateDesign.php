<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'furni');

$title = $_POST['title'];
$content = $_POST['content'];
$btn = $_POST['btn'];
$id = $_POST['id'];


$target_dir = "../images/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo1 = $_FILES["photo1"]["name"];
    $photo2 = $_FILES["photo2"]["name"];
    $photo3 = $_FILES["photo3"]["name"];
    $query = "UPDATE `design` SET `photo1`='$photo1',`photo2`='$photo2',`photo3`='$photo3',`title`='$title',`content`='$content',`btn`='$btn' WHERE id=$id";
} else {
    $query = "update design set `title`='$title',`content`='$content',`btn`='$btn' WHERE id=$id";
}

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}