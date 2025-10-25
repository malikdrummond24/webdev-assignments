const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

let tasks = [];

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('taskTitle').value.trim();
  const priority = document.getElementById('taskPriority').value;
  const status = document.querySelector('input[name="taskStatus"]:checked').value;

  if (title === "") return;

  const task = {
    title: title,
    priority: priority,
    status: status
  };

  tasks.push(task);
  displayTask(task);
  taskForm.reset();
});

function displayTask(task) {
  const li = document.createElement('li');
  li.className = 'list-group-item';

  const text = document.createElement('span');
  text.innerHTML = `${task.title} - <small>${task.priority} Priority | ${task.status}</small>`;

  const btns = document.createElement('div');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.className = 'btn btn-success btn-sm me-2';
  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
    task.status = 'Completed';
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'btn btn-danger btn-sm';
  removeBtn.addEventListener('click', function() {
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    li.remove();
  });

  btns.appendChild(completeBtn);
  btns.appendChild(removeBtn);

  li.appendChild(text);
  li.appendChild(btns);

  taskList.appendChild(li);
}
