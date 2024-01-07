function addTask() {
      const taskInput = document.getElementById('task');
      const taskText = taskInput.value.trim();
      const taskDateInput = document.getElementById('taskDate');
      const taskDate = taskDateInput.value;

      if (taskText && taskDate !== '') {
        const taskList = document.getElementById('incompleteTaskList');

        const li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox" onchange="updateTask(this)">
          <span class="task-text" onclick="editTask(this)">${taskText}</span>
          <input type="text" class="edit-input">
          <span class="task-date" onclick="editTask(this)"> (${taskDate})</span>
          <input type="date" id="edit"class="edit-date">
          <button id="editbutton" onclick="editTask(this)">Edit</button>
          <button id="delbutton" onclick="deleteTask(this)"></button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
        taskDateInput.value = '';
      }
    }

    function updateTask(checkbox) {
      const taskText = checkbox.nextElementSibling;
      const editInput = taskText.nextElementSibling;
      const taskDateSpan = editInput.nextElementSibling;
      const editDateInput = taskDateSpan.nextElementSibling;
      const incompleteList = document.getElementById('incompleteTaskList');
      const completedList = document.getElementById('completedTaskList');
      
      

      if (checkbox.checked) {
        taskText.classList.add('completed');
        completedList.appendChild(checkbox.parentElement);
        // Remove the "Edit" functionality from completed tasks
        editbutton.style.display = 'none';
        editInput.style.display = 'none';
        edit.style.display= 'none';
        editDateInput.style.display = 'none';
        
      } else {
        taskText.classList.remove('completed');
        incompleteList.appendChild(checkbox.parentElement);
        // Restore the "Edit" functionality for incomplete tasks
        editbutton.style.display = 'inline';
        edit.style.display= 'none';
        editInput.style.display = 'none';
        editDateInput.style.display = 'none';
      }
    }

    function editTask(button) {
      const taskItem = button.parentElement;
      const taskText = taskItem.querySelector('.task-text');
      const editInput = taskItem.querySelector('.edit-input');
      const taskDateSpan = taskItem.querySelector('.task-date');
      const editDateInput = taskItem.querySelector('.edit-date');
      const editButton = taskItem.querySelector('button');

      taskText.style.display = 'none';
      taskDateSpan.style.display = 'none';
      editInput.style.display = 'inline-block';
      editDateInput.style.display = 'inline-block';
      editInput.value = taskText.textContent.trim();
      editInput.focus();
      editDateInput.focus();
      // Change the button to "Update"
      editButton.textContent = 'Update';
      editButton.onclick = function() { updateTaskText(this); };
    }

    function updateTaskText(button) {
      const taskItem = button.parentElement;
      const taskText = taskItem.querySelector('.task-text');
      const editInput = taskItem.querySelector('.edit-input');
      const taskDateSpan = taskItem.querySelector('.task-date');
      const editDateInput = taskItem.querySelector('.edit-date');
      const editButton = taskItem.querySelector('button');

      taskText.textContent = `${editInput.value}`;
      taskText.style.display = 'inline-block';
      taskDateSpan.textContent = editDateInput.value;
      taskDateSpan.style.display = 'inline-block';
      editInput.style.display = 'none';
      editDateInput.style.display = 'none';
      // Change the button back to "Edit"
      editButton.textContent = 'Edit';
      editButton.onclick = function() { editTask(this); };
    }

    function deleteTask(button) {
      const taskItem = button.parentElement;
      taskItem.remove();
    }