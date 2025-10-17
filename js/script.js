/// Database Simulation
let taskDb = [];

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-date');

    if (validateInputs(taskInput.value, taskDate.value)) {
        const newTask = {
            task: taskInput.value,
            date: taskDate.value,
        };

        /// Add to database
        taskDb.push(newTask);

        renderTasks();

        // Reset input field
        taskInput.value = '';
        taskDate.value = '';
    }
}

function renderTasks(filteredDate = '') {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    // Filter data jika tanggal difilter
    const filteredTasks = filteredDate
        ? taskDb.filter(task => task.date === filteredDate)
        : taskDb;

    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<li>No tasks found.</li>';
        return;
    }

    filteredTasks.forEach((taskObj, index) => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
    });
}

function deleteAllTasks() {
    if (taskDb.length === 0) {
        alert('No tasks to delete!');
        return;
    }

    const confirmDelete = confirm('Are you sure you want to delete all tasks?');
    if (confirmDelete) {
        taskDb = [];
        renderTasks();
    }
}

function filterTasks() {
    const selectedDate = prompt('Enter date to filter (YYYY-MM-DD):');
    if (!selectedDate) {
        renderTasks(); 
        return;
    }

    renderTasks(selectedDate);
}

function validateInputs(task, date) {
    if (task.trim() === '' || date.trim() === '') {
        alert('Please enter both task and due date.');
        return false;
    }
    return true;
}
