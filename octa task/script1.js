document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');
  
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    tasksList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        const listItem = event.target.parentElement;
        tasksList.removeChild(listItem);
      } else if (event.target.classList.contains('edit')) {
        const listItem = event.target.parentElement;
        const taskText = listItem.querySelector('.task-text');
        const newTaskText = prompt('Edit your task:', taskText.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
          taskText.textContent = newTaskText.trim();
        }
      } else if (event.target.classList.contains('complete')) {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
      }
    });
  
    function addTask(taskText) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="complete">Complete</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      tasksList.appendChild(listItem);
    }
  });
  