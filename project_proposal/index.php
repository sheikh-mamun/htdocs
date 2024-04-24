<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Panel</title>
<link rel="stylesheet" href="libs/css/main.css">
<style>
  .login-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
}

.login-form {
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form h1 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-weight: bold;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}

</style>
</head>
<body style="background-image: url(PHOTOS/fgggf.jpg);">
  <?php
    ob_start();
    require_once('includes/load.php');
    if($session->isUserLoggedIn(true)) { redirect('home.php', false);}
  ?>
  <?php include_once('layouts/header.php'); ?>
  <div class="login-page">
      <div class="text-center">
         <h1>Login Panel</h1>
         <h4>Inventory Management System</h4>
       </div>
       <?php echo display_msg($msg); ?>
        <form method="post" action="auth.php" class="clearfix">
          <div class="form-group">
                <label for="username" class="control-label">Username</label>
                <input type="name" class="form-control" name="username" placeholder="Username">
          </div>
          <div class="form-group">
              <label for="Password" class="control-label">Password</label>
              <input type="password" name= "password" class="form-control" placeholder="Password">
          </div>
          <div class="form-group">
                  <button type="submit" class="btn btn-danger" style="border-radius:0%">Login</button>
          </div>
      </form>
  </div>
  <?php include_once('layouts/footer.php'); ?>
</body>
</html>
