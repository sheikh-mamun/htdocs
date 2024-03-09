<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: teal;
        }

        form {
            width: 400px;
            height: 604px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: rgb(178, 189, 189);
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input, select {
            width: 100%;
            padding: 8px;
            margin-bottom: 12px;
            box-sizing: border-box;
        }

        button {
            background-color: #4caf50;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        .error {
            color: red;
            margin-top: 8px;
        }
    </style>
</head>
<body>

<?php
// Establish database connection (update with your database credentials)
$host = "localhost";
$username = "root";
$password = " ";
$database = "student_info";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
if (isset($_POST['btnSubmit'])) {
    $name = $_POST['name'];
    $address = $_POST['address'];
    $gender = $_POST['gender'];
    $course = $_POST['course'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password

    // Insert data into the database
    $sql = "INSERT INTO student_info (name, address, gender, course, email, password)
            VALUES ('$name', '$address', '$gender', '$course', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "<p>User registration successful</p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

<form id="registrationForm" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <h2 class="title">Create a new account</h2>
    <hr>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="John Doe" required>

    <label for="address">Address:</label>
    <input type="text" id="address" name="address" placeholder="Enter your area" required>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>

    <label for="course">Course:</label>
    <select id="course" name="course" required>
        <option value="WDPF">WDPF</option>
        <option value="C#">C#</option>
        <option value="JAVA">JAVA</option>
        <option value="DATABASE">DATABASE</option>
        <option value="GRAPIC-DEISGN">GRAPIC-DEISGN</option>
    </select>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="john.doe@example.com" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" required>

    <label for="passwordConfirmation">Confirm Password:</label>
    <input type="password" id="passwordConfirmation" name="passwordConfirmation" placeholder="Enter your password" required>
    <button type="submit" name="btnSubmit">Create Account</button>
    <div id="errorMessages" class="error"></div>
</form>

</body>
</html>
