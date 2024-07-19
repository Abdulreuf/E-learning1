
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the necessary elements
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');
  const removeButton = document.querySelector('.remove-button');

  // Function to add a task to the list
  const addTask = () => {
    const taskText = taskInput.value.trim(); // Get and trim the input value
    if (taskText !== '') {
      const li = document.createElement('li'); // Create a new list item
      li.textContent = taskText; // Set the text of the list item
      li.addEventListener('click', () => { // Toggle completed status on click
        li.classList.toggle('completed');
      });
      taskList.appendChild(li); // Append the new list item to the task list
      taskInput.value = ''; // Clear the input field
    }
  };

  // Function to remove completed tasks
  const removeCompletedTasks = () => {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
      task.remove(); // Remove each completed task
    });
  };

  // Add event listeners to buttons
  addButton.addEventListener('click', addTask);
  removeButton.addEventListener('click', removeCompletedTasks);
});
