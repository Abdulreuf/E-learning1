// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Event listener for the add button
addButton.addEventListener('click', addTask);

// ... (previous code)
// Assuming you have the following elements in your HTML:
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// ... (previous code)

function toggleComplete(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function removeCompleted() {
  const completedTasks = taskList.querySelectorAll('.completed');
  completedTasks.forEach(task => task.remove());
}

// Event listener for task completion
taskList.addEventListener('click', toggleComplete);
// Assuming you already have the "Remove Completed" button in your HTML
// (as shown in the provided HTML snippet)

// Create a function to handle removing completed tasks
function removeCompleted() {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('.completed'); // Assuming you have a CSS class for completed tasks
  
    completedTasks.forEach((task) => {
      task.remove(); // Remove each completed task from the list
    });
  }
  
  // Add an event listener to the "Remove Completed" button
  const removeButton = document.querySelector('.remove-button');
  removeButton.addEventListener('click', removeCompleted);
  