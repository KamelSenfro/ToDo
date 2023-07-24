const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const taskItem = createTaskItem(taskText);
  taskList.appendChild(taskItem);
  taskInput.value = '';
}

function createTaskItem(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  return li;
}

function deleteTask(deleteButton) {
  const taskItem = deleteButton.parentNode;
  taskList.removeChild(taskItem);
}
