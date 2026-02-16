
let taskInput =
    document.getElementById("taskInput");

let addBtn =
    document.getElementById("addBtn");

let taskList =
    document.getElementById("taskList");

let startBtn =
    document.getElementById("startBtn");

let quiz =
    document.getElementById("quiz");

let finishBtn =
    document.getElementById("finishBtn");

let result =
    document.getElementById("result");

let resultText =
    document.getElementById("resultText");



let tasks = [];

let selectedTask = "";



/* ADD TASK */

addBtn.onclick = function () {

    let task = taskInput.value;

    if (task != "") {

        tasks.push(task);

        showTasks();

        taskInput.value = "";

    }

}



/* SHOW TASK */

function showTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        taskList.innerHTML +=

            `<li onclick="selectTask(${index})">

${task}

</li>`;

    });

}



/* SELECT */

function selectTask(index) {

    selectedTask = tasks[index];

    alert("Selected: " + selectedTask);

}



/* START QUIZ */

startBtn.onclick = function () {

    if (selectedTask == "") {

        alert("Select task first");

        return;

    }

    quiz.classList.remove("hidden");

}



/* RESULT */

finishBtn.onclick = function () {

    let bad = 0;
    let medium = 0;
    let good = 0;



    document
        .querySelectorAll("input:checked")
        .forEach(el => {

            if (el.value == "bad") bad++;

            else if (el.value == "medium") medium++;

            else good++;

        });



    let final;



    if (bad >= 2)

        final = "Easy Task: " + selectedTask;

    else if (medium >= 2)

        final = "Medium Task: " + selectedTask;

    else

        final = "Hard Task: " + selectedTask;



    result.classList.remove("hidden");

    resultText.innerText = final;

}
