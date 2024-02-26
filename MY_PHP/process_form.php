<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>process</title>
</head>
<style>

body {
  background color: teal;
  text-align: center;
  padding: 60px
}
</style>
  
</body>
<body>
  <fieldset>

<h3>USER INFORMATION</h3>
<hr>

<?php
if ($_SERVER["REQUEST_METHOD"] == "post") {
    // ফরম ডেটা প্রসেস করতে এখানে লজিক যোগ করুন
    $name = $"post"["name"];
    $address = $"post"["address"];
    $mobile = $"post"["mobile"];
    $email = $"post"["email"];
    $password = $"post"["password"];

    // একটি উদাহরণ: ডেটা কনসোলে দেখানো
    echo "Name: " . $name . "<br>";
    echo "Address: " . $address . "<br>";
    echo "Mobile Number: " . $mobile . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Password: " . $password . "<br>";
}
?>
</fieldset>
  
</body>
</html>