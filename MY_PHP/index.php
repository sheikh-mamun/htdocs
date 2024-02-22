<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>index</title>
</head>
<body>


<?php

// echo "my first php run";

// $food = "burger";
// echo "my favourit " .$food;

// $foods = "pizza";
// echo "my favourit $food";



// access index arrays

// $cars = array ("volve", "BMW", "TOYTOTA");
// echo $cars[1];
// echo "<br>";
// echo $cars[0];


// $cars = array ("volve", "BMW", "TOYTOTA");
// echo $cars[1];
// echo "<br>";
// echo $cars[0];
// echo $cars[2];


// array_pop

// $a = array("kalam","roni","foisal");
// $b = array_pop($a);
// echo $b;


// array_push

// $a=array("rowdra","liza","lucky","kalpona");
//  $b=array_push($a,"afroza");
 	// print_r($a);
	// echo "<br/>";
// 	echo $b;


// array_shift

// $p =array("kolpona","foisal","jamal");
// $q = array_shift($p);
//   print_r($p);
//   echo "<br/>";
//   echo $q;


// array_slice 
// $a =array("jmal","klama","foisal");
// print_r(array_slice($a,2));



// array_splice

// $a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
// $a2=array("a"=>"purple","b"=>"orange");
// array_splice($a1,0,1,$a2);
// print_r($a1);

// echo "<br>";

// array_unshift

// $a =array("dog","cat");
// $b = array_unshift($a, "cow","elephant" );
// echo $b;
// echo "<br>";
// print_r($b);


// Array unique

// $status = array("dhaka","washington","mirpur","dhaka","Vatican City","dhaka","DC");
// $statusFraq = array_unique($status);
// print_r($statusFraq);

//it is removed the duplicate value of an array


// count_array

// $garden = array("guyava","mango","lichu","dalim","jamrol");
// echo count($garden);

// count values arrays

$states = array("Washington","Vatican City","Dhaka","DC","Dhaka","DC");
	
	$stateFrequency = array_count_values($states);
	
		print_r($stateFrequency);
		
//how many times are situated elements in an array


























?>


  
</body>
</html>