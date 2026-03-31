console.log("JS Loaded");

let courses = [];

document.addEventListener("DOMContentLoaded", function () {

    const addBtn = document.getElementById("addCourseBtn");
    const calcBtn = document.getElementById("calculateBtn");
    const tableBody = document.getElementById("coursesTableBody");

    addBtn.addEventListener("click", function () {

        const name = document.getElementById("courseName").value.trim();
        const credit = parseFloat(document.getElementById("courseCredit").value);
        const grade = document.getElementById("courseGrade").value.trim().toUpperCase();

        if (name === "" || isNaN(credit) || grade === "") {
            alert("Fill all fields correctly");
            return;
        }

        courses.push({ name, credit, grade });

        renderTable();

        document.getElementById("courseName").value = "";
        document.getElementById("courseCredit").value = "";
        document.getElementById("courseGrade").value = "";
    });

    calcBtn.addEventListener("click", function () {

        if (courses.length === 0) {
            alert("No courses added");
            return;
        }

        let totalPoints = 0;
        let totalCredits = 0;

        courses.forEach(c => {
            let gp = getGradePoint(c.grade);
            totalPoints += gp * c.credit;
            totalCredits += c.credit;
        });

        let gpa = (totalPoints / totalCredits).toFixed(2);

        alert("Your GPA = " + gpa);
    });

    function getGradePoint(g) {
        if (g === "A") return 4;
        if (g === "B") return 3;
        if (g === "C") return 2;
        if (g === "D") return 1;
        if (g === "F") return 0;
        return 0;
    }

    function renderTable() {
        tableBody.innerHTML = "";

        courses.forEach((c, i) => {
            let row = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${c.name}</td>
                    <td>${c.credit}</td>
                    <td>${c.grade}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

});
