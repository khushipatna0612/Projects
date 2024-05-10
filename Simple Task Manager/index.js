const taskList = [];

document.getElementById('add-button').onclick = function() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;

    taskList.push(taskName);
    taskInput.value = '';
    alert('Added the task: ' + taskName);
};

document.getElementById('list-button').onclick = function() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    taskList.forEach(function(task) {
        const listTask = document.createElement('li');
        listTask.textContent = task;
        taskListElement.appendChild(listTask);
    });
};

document.getElementById('removeTasks').onclick = function() {
    taskList.length = 0;
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    alert('Removed the tasks');
};
