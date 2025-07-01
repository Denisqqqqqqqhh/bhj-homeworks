const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

function createTask(text) {
    const task = document.createElement('div');
    task.classList.add('task');
    
    const title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = text;
    
    const removeButton = document.createElement('a');
    removeButton.classList.add('task__remove');
    removeButton.href = '#';
    removeButton.textContent = '×';
    
    removeButton.addEventListener('click', function(event) {
        event.preventDefault();
        list.removeChild(task);
    });
    
    task.appendChild(title);
    task.appendChild(removeButton);
    
    return task;
}

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        const newTask = createTask(input.value);
        list.appendChild(newTask);
        input.value = '';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (input.value.trim() !== '') {
        const newTask = createTask(input.value);
        list.appendChild(newTask);
        input.value = '';
    }
});
