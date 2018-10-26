
function renderStudents(students) {
    var mainContainer = `
        <div class="d-flex flex-column align-items-center border border-dark mt-5" style="width: 402px; margin: 0 auto">
            <h2 class="text-center">Role Call: </h2>
        </div>
    `
    var studentStatus = students.map(function (student) {
       return `
        <div class="${student.isPresent} text-center border border-dark" style="width: 400px; height: 50px; margin: 0 auto;">
            ${student.name}
        </div>
    `
    });

    return mainContainer += studentStatus.join("");
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}