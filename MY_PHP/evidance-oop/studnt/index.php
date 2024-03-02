<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Form</title>
</head>
<body>

<form action="#" method="post">
    <div>
        ID:<br/>
        <input type="text" name="txtId"/>
    </div>

    <div>
        Name<br/>
        <input type="text" name="txtName"/>
    </div>

    <div>
        Course<br/>
        <input type="text" name="txtCourse"/>
    </div>

    <div>
        Phone<br/>
        <input type="text" name="txtPhone"/>
    </div>

    <div>
        <input type="submit" name="btnSubmit" value="Submit"/>
    </div>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["txtId"];
    $name = $_POST["txtName"];
    $course = $_POST["txtCourse"];
    $phone = $_POST["txtPhone"];

    if (preg_match("/^[0-9+]{11,14}$/", $phone)) {
        $data = "$id,$name,$course,$phone\n";
        file_put_contents("data.txt", $data, FILE_APPEND);
        echo "Success!";
    } else {
        echo "Invalid Phone";
    }
}
?>

</body>
</html>
