let tasks = [];

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function filterTasks(filter) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'pending') {
      return !task.completed;
    } else if (filter === 'completed') {
      return task.completed;
    }
  });
  renderTasks(filteredTasks);
}

function renderTasks(filteredTasks = tasks) {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = task.completed ? 'completed' : '';
    taskItem.innerHTML = `
      <span>${task.text}</span>
      <button onclick="toggleTask(${index})">${task.completed ? 'Desmarcar' : 'Concluir'}</button>
    `;
    taskList.appendChild(taskItem);
  });
}

// Inicializar a visualização com todas as tarefas
filterTasks('all');
