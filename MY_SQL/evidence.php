<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert and View Data</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin-top: 20px;
            border: 1px solid white;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color:  #D6EEEE;
        }
        tr:hover {
            background-color: #f2f2f2;
        }


        /* USER FROM CSS */

        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        fieldset {
            width: 30%;
            margin: 50px auto;
            text-align: center;
            border: 2px solid #333;
            border-radius: 10px;
            padding: 25px;
            background-color: teal;
        }
        legend {
            font-size: 20px;
            font-weight: bold;
            color: #333;
        }
        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            color: #333;
        }
        input[type="text"],
        input[type="email"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 20px;
            box-sizing: border-box;
        }
        
        input[type="submit"] {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<fieldset><legend>User personal information</legend>
<form method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br>

    <label for="phone">Phone:</label><br>
    <input type="text" id="phone" name="phone"><br>

    <label for="age">Age:</label><br>
    <input type="text" id="age" name="age"><br>

    <input type="submit" name="submit" value="Submit">
</form>
</fieldset>

<?php
$hostname = "localhost";
$username = "root";
$password = ""; // Your database password
$database = "student_dairy"; // Your database name
$table = "student"; // Your table name

// Create connection
$conn = new mysqli($hostname, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $age = $_POST['age'];

    // Insert data into database
    $sql = "INSERT INTO $table (name, email, phone, age) VALUES ('$name', '$email', '$phone', '$age')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$sql = "SELECT * FROM $table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>User Database Information</h2>";
    
    echo "<table>";
    echo "<tr><th>Name</th><th>Email</th><th>Phone</th><th>Age</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["name"]."</td><td>".$row["email"]."</td><td>".$row["phone"]."</td><td>".$row["age"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "No data found";
}

$conn->close();
?>

</body>
</html>
