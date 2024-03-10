<?php
// ধাপ 2: ছাত্র শ্রেণীর ফাইল অন্তর্ভুক্ত করুন
require_once("student_class.php");

// ফর্ম জমা হয়েছে কিনা তা পরীক্ষা করুন
if (isset($_POST["btnSubmit"])) {
    $id = $_POST["txtId"];
    $name = $_POST["txtName"];
    $course = $_POST["txtCourse"];
    $phone = $_POST["txtPhone"];

    // ফোন নম্বর যাচাই করুন
    if (preg_match("/^[0-9+]{11,14}$/", $phone)) {
        // Create a new Student object
        $student = new Student($id, $name, $course, $phone);

        // Handle file upload
        $uploadsDir = "uploads/";
        $uploadedFile = $_FILES["fileUpload"];
        $fileExtension = pathinfo($uploadedFile["name"], PATHINFO_EXTENSION);
        $newFileName = $id . "_" . time() . "." . $fileExtension;
        $destination = $uploadsDir . $newFileName;

        if (move_uploaded_file($uploadedFile["tmp_name"], $destination)) {
            // Save the student data
            $student->setFileName($newFileName);
            $student->save();
            echo "Success!";
        } else {
            echo "File upload failed!";
        }
    } else {
        echo "Invalid Phone";
    }
}

// Logout logic
if (isset($_POST["btnLogout"])) {
    session_start();
    session_destroy();
    header("location: login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
            background-color: #c0c0ca;
            text-align: center;
            border: 2px solid teal;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 20px;
            width: 30%;
            height: 450px;
        }
    </style>
</head>
<body>

<fieldset>
    <legend><h2>Student Information Form</h2></legend>
    <form action="#" method="post" enctype="multipart/form-data">
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
            File Upload:<br/>
            <input type="file" name="fileUpload"/>
        </div>

        <div>
            <input type="submit" name="btnSubmit" value="Submit"/>
        </div>
        <div>
            <input type="submit" name="btnLogout" value="Log Out"/>
        </div>
    </form>
</fieldset>

<?php
Student::display_students();
?>

</body>
</html>
