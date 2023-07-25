const taskInput = document.getElementById('taskInput');
const reminderInput = document.getElementById('reminderInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  const reminderTime = reminderInput.value;

  if (taskText === '' || reminderTime === '') {
    return;
  }

  const taskItem = createTaskItem(taskText, reminderTime);
  taskList.appendChild(taskItem);
  taskInput.value = '';
  reminderInput.value = '';
}

function createTaskItem(taskText, reminderTime) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <span>${formatDate(reminderTime)}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  li.dataset.reminderTime = reminderTime;
  return li;
}

function deleteTask(deleteButton) {
  const taskItem = deleteButton.parentNode;
  taskList.removeChild(taskItem);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
