<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>get_post_method</title>
</head>
<body>


<?php
    echo $_ post["fname"];

?>



<form action="<?php $_SERVER['PHP_SELF']?>" method = "post">
       
       <input type="submit" value = "submit">
       <input type="text" name ="fname">
        <br>
       <br>
       <label for="" name>name</label>
       <input type="text" value = "">

</form>







    
</body>
</html>