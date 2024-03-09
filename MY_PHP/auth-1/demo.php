<?php
session_start();

if (!isset($_SESSION["sname"])) {
    header("location:login.php");
}

// Step 2: Include the Student class file
require_once("student_class.php");

if (isset($_POST["btnSubmit"])) {
    $id = $_POST["txtId"];
    $name = $_POST["txtName"];
    $email = $_POST["email"];
    $phone = $_POST["txtPhone"];

    if (!preg_match("/^[0-9+]{11,14}$/", $phone)) {
        echo "Phone is not valid";
    } elseif (!preg_match("/^[a-zA-Z0-9]{4,}[@][a-zA-Z]{4,6}[.][a-zA-Z]{2,3}$/", $email)) {
        echo "Email is not valid";
    } else {
        $student = new Student($id, $name, $email, $phone);
        $student->save();
        echo "Success!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Student Form</title>
    <style>

body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            text-align: center;
            padding: 20px;
            background-color: #f2f2f2;
        }

        form {
            display: inline-block;
            text-align: left;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        input {
            margin-bottom: 10px;
        }

        table {
            margin: 20px auto;
            border-collapse: collapse;
            width: 50%;
        }

        table, th, td {
            border: 1px solid black;
        }

        fieldset {
            background-color: Bisque;
            text-align: center;
            border: 2px solid teal;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 20px;
            width: 30%;
            height: 350px;
        }
       
    </style>
</head>
<body>
<fieldset>
    <legend>User-personal-information</legend>
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
        Email<br/>
        <input type="text" name="email"/>
    </div>

    <div>
        Phone<br/>
        <input type="text" name="txtPhone"/>
    </div>
    <br>
    <br>
    <div>
        <input type="submit" name="btnSubmit" value="Submit"/>
        <input type="submit" name="btnlogout" value="Log out"/>
    </div>
</form>
</fieldset>
    
<?php
Student::display_students();
?>


   


</body>
</html>
