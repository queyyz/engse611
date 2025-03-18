function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskCategory = document.getElementById("task-category");
    const taskText = taskInput.value.trim();
    const category = taskCategory.value;

    if (taskText) {
        const taskList = document.getElementById("task-list");

        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = `${taskText} - ${category}`;
        listItem.appendChild(taskSpan);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = function () {
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(listItem);
            }
        };
        listItem.appendChild(deleteBtn);

        taskSpan.onclick = function () {
            listItem.classList.toggle("completed");
        };

        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}
