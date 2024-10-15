document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-btn">x</button>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';

            const removeBtn = taskItem.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
        }
    }
});
