function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskText = taskInput.value.trim();

  if (taskText === "") {
      alert("Please enter a task.");
      return;
  }

  var taskList = document.getElementById('taskList');

  var li = document.createElement('li');

  // Create a span to wrap the task text
  var taskSpan = document.createElement('span');
  
  // Create the Font Awesome task icon and text inside the span
  var taskIcon = document.createElement('i');
  taskIcon.classList.add('fas', 'fa-tasks'); // Font Awesome task icon
  taskSpan.appendChild(taskIcon);
  
  var taskTextNode = document.createTextNode(taskText);
  taskSpan.appendChild(taskTextNode);
  
  li.appendChild(taskSpan); // Append the task span to the li

  // Create check button with Font Awesome icon
  var checkBtn = document.createElement('button');
  checkBtn.classList.add('check-btn');
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkBtn.onclick = function() {
      taskSpan.classList.add('completed'); // Mark the task as completed
      li.removeChild(checkBtn); // Remove the check button from the DOM
  };
  li.appendChild(checkBtn);

  // Create delete button with Font Awesome icon
  var deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Delete';
  deleteBtn.onclick = function() {
      taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input field
}
