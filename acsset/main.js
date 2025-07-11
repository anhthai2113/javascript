 function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();
      
      if (taskText === "") {
        alert("Vui lòng nhập công việc!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Xoá";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function () {
        li.remove();
      };

      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);

      input.value = ""; 
      input.focus(); }