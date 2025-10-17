/// Database Simulation
let taskDb = [];

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-date');

    if (validateInputs(taskInput.value, taskDate.value)) {
        const newTask = {
            task: taskInput.value,
            date: taskDate.value,
        }

        /// Add to database
        taskDb.push(newTask);

        renderTasks();

    }
        
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML='';

    taskDb.forEach((taskObj, index) => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
    });
}

function deleteAllTasks() {
    taskDb = [];
    renderTasks();
}

function filterTasks() { }

function validateInputs(task, date) {
    if (task.trim() == '' || date.trim() == '') {
        alert('please enter both task and due date.');
        return false;
    }
    return true;
}