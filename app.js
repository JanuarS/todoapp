const form = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const task = document.querySelector('#task');
const savedList = JSON.parse(localStorage.getItem('todos')) || [];

// retrieve from localStorage
for(let i = 0; i < savedList.length; i++) {
    console.log(savedList[i].task);
    let newTask = document.createElement('li');
    newTask.innerHTML = savedList[i].task;
    todoList.appendChild(newTask);
}

// submitting tasks
form.addEventListener('submit', function(e) {
    e.preventDefault();
   
    const newTask = document.createElement('li');
    const checkTask = document.createElement('input');
        checkTask.setAttribute('type', 'checkbox');
    const taskText = document.createTextNode(task.value);
    const removeBtn = document.createElement('button');
        removeBtn.innerText = 'remove';

    newTask.appendChild(checkTask);
    newTask.appendChild(taskText);
    newTask.appendChild(removeBtn);
    todoList.appendChild(newTask);

    form.reset();

    // save to localStorage
    savedList.push({task: newTask.innerHTML});
    localStorage.setItem('todos', JSON.stringify(savedList));

});

// toggling tasks and removing
todoList.addEventListener('click', function(e) {
    if(e.target.tagName === 'INPUT') {
        e.target.parentElement.classList.toggle('completed');
    } else if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});