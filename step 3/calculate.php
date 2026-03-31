<?php

header('Content-Type: application/json');

if(isset($_POST['course'], $_POST['credits'], $_POST['grade'])){

$courses=$_POST['course'];
$credits=$_POST['credits'];
$grades=$_POST['grade'];

$totalPoints=0;
$totalCredits=0;

$table="<table class='table table-bordered mt-3'>";
$table.="<tr><th>Course</th><th>Credits</th><th>Grade</th><th>Points</th></tr>";

for($i=0;$i<count($courses);$i++){

$course=htmlspecialchars($courses[$i]);
$cr=floatval($credits[$i]);
$gr=floatval($grades[$i]);

if($cr<=0) continue;

$pts=$cr*$gr;

$totalPoints+=$pts;
$totalCredits+=$cr;

$table.="<tr>
<td>$course</td>
<td>$cr</td>
<td>$gr</td>
<td>$pts</td>
</tr>";

}

$table.="</table>";

if($totalCredits>0){

$gpa=$totalPoints/$totalCredits;

if($gpa>=3.7) $text="Distinction";
elseif($gpa>=3.0) $text="Merit";
elseif($gpa>=2.0) $text="Pass";
else $text="Fail";

echo json_encode([
"success"=>true,
"gpa"=>$gpa,
"message"=>"Your GPA = ".number_format($gpa,2)." ($text)",
"table"=>$table
]);

}else{

echo json_encode([
"success"=>false,
"message"=>"No valid data"
]);

}

}else{

echo json_encode([
"success"=>false,
"message"=>"Data not received"
]);

}
