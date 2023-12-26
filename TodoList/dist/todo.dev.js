"use strict";

function addTask() {
  var taskInput = document.getElementById('task');
  var taskText = taskInput.value.trim();
  var taskDateInput = document.getElementById('taskDate');
  var taskDate = taskDateInput.value;

  if (taskText && taskDate !== '') {
    var taskList = document.getElementById('incompleteTaskList');
    var li = document.createElement('li');
    li.innerHTML = "\n          <input type=\"checkbox\" onchange=\"updateTask(this)\">\n          <span class=\"task-text\" onclick=\"editTask(this)\">".concat(taskText, "</span>\n          <input type=\"text\" class=\"edit-input\">\n          <span class=\"task-date\" onclick=\"editTask(this)\"> (").concat(taskDate, ")</span>\n          <input type=\"date\" id=\"edit\"class=\"edit-date\">\n          <button id=\"editbutton\" onclick=\"editTask(this)\">Edit</button>\n          <button id=\"delbutton\" onclick=\"deleteTask(this)\"></button>\n        ");
    taskList.appendChild(li);
    taskInput.value = '';
    taskDateInput.value = '';
  }
}

function updateTask(checkbox) {
  var taskText = checkbox.nextElementSibling;
  var editInput = taskText.nextElementSibling;
  var taskDateSpan = editInput.nextElementSibling;
  var editDateInput = taskDateSpan.nextElementSibling;
  var incompleteList = document.getElementById('incompleteTaskList');
  var completedList = document.getElementById('completedTaskList');

  if (checkbox.checked) {
    taskText.classList.add('completed');
    completedList.appendChild(checkbox.parentElement); // Remove the "Edit" functionality from completed tasks

    editbutton.style.display = 'none';
    editInput.style.display = 'none';
    edit.style.display = 'none';
    editDateInput.style.display = 'none';
  } else {
    taskText.classList.remove('completed');
    incompleteList.appendChild(checkbox.parentElement); // Restore the "Edit" functionality for incomplete tasks

    editbutton.style.display = 'inline';
    edit.style.display = 'none';
    editInput.style.display = 'none';
    editDateInput.style.display = 'none';
  }
}

function editTask(button) {
  var taskItem = button.parentElement;
  var taskText = taskItem.querySelector('.task-text');
  var editInput = taskItem.querySelector('.edit-input');
  var taskDateSpan = taskItem.querySelector('.task-date');
  var editDateInput = taskItem.querySelector('.edit-date');
  var editButton = taskItem.querySelector('button');
  taskText.style.display = 'none';
  taskDateSpan.style.display = 'none';
  editInput.style.display = 'inline-block';
  editDateInput.style.display = 'inline-block';
  editInput.value = taskText.textContent.trim(); // editDateInput.value = taskDateSpan.textContent;

  editInput.focus();
  editDateInput.focus(); // Change the button to "Update"

  editButton.textContent = 'Update';

  editButton.onclick = function () {
    updateTaskText(this);
  };
}

function updateTaskText(button) {
  var taskItem = button.parentElement;
  var taskText = taskItem.querySelector('.task-text');
  var editInput = taskItem.querySelector('.edit-input');
  var taskDateSpan = taskItem.querySelector('.task-date');
  var editDateInput = taskItem.querySelector('.edit-date');
  var editButton = taskItem.querySelector('button');
  taskText.textContent = "".concat(editInput.value);
  taskText.style.display = 'inline-block';
  taskDateSpan.textContent = editDateInput.value;
  taskDateSpan.style.display = 'inline-block';
  editInput.style.display = 'none';
  editDateInput.style.display = 'none'; // Change the button back to "Edit"

  editButton.textContent = 'Edit';

  editButton.onclick = function () {
    editTask(this);
  };
}

function deleteTask(button) {
  var taskItem = button.parentElement;
  taskItem.remove();
}
//# sourceMappingURL=todo.dev.js.map
