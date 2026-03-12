<?php

$courses=$_POST['course'];
$credits=$_POST['credits'];
$grades=$_POST['grade'];

$totalPoints=0;
$totalCredits=0;

for($i=0;$i<count($courses);$i++){

$cr=$credits[$i];
$gr=$grades[$i];

$totalPoints += $cr * $gr;
$totalCredits += $cr;

}

$gpa = $totalPoints / $totalCredits;

echo "<h2>Your GPA = ".number_format($gpa,2)."</h2>";

?>
