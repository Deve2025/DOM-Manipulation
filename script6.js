document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    // Function to add a new task
    function addTask(event) {
      event.preventDefault();
      const taskText = todoInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="task-text">${taskText}</span>
          <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = ""; 
      }
    }
  
    // Function to delete a task
    function deleteTask(event) {
      if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;
        todoList.removeChild(li);
      }
    }
  
    // Function to toggle task completion (mark as done)
    function toggleTask(event) {
      if (event.target.classList.contains("task-text")) {
        event.target.parentElement.classList.toggle("completed");
      }
    }
  
    // Event listeners
    todoForm.addEventListener("submit", addTask);
    todoList.addEventListener("click", deleteTask);
    todoList.addEventListener("click", toggleTask);
  });