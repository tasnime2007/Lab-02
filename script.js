function addCourse(){

var row=document.createElement("div");

row.className="course-row";

row.innerHTML=`
<label>Course:</label>
<input type="text" name="course[]" required>

<label>Credits:</label>
<input type="number" name="credits[]" min="1" required>

<label>Grade:</label>
<select name="grade[]">
<option value="4">A</option>
<option value="3">B</option>
<option value="2">C</option>
<option value="1">D</option>
<option value="0">F</option>
</select>
`;

document.getElementById("courses").appendChild(row);

}
function validateForm(){

var credits=document.getElementsByName("credits[]");

for(var i=0;i<credits.length;i++){

if(credits[i].value<=0){

alert("Credits must be positive");

return false;

}

}

return true;

}
