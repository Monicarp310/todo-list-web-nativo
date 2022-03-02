const tasks = [
  new Task("Tarea1", "Primero", "Done", 1),
  new Task("Tarea2", "Segundo", "Doing", 0),
  new Task("Tarea3", "Tercero", "Todo", 1),
  new Task("Tarea4", "Cuarto", "Done", 0),
];

tasks.forEach((task) => {
  const taskToClone = document.getElementById("TasktoClone").cloneNode(true);

  let name = taskToClone.getElementsByClassName("taskName");
  name[0].innerHTML = task.name;
  let description = taskToClone.getElementsByClassName("taskDesc");
  description[0].innerHTML = task.description;
  let status = taskToClone.getElementsByClassName("taskStatus");
  status[0].innerHTML = task.status;
  let priority = taskToClone.getElementsByClassName("taskPriority");
  priority[0].innerHTML = task.priority;


  if (status.value="To do"){
    let todoList = document.getElementById("todoTask");
    todoList.appendChild(taskToClone.cloneNode(true));
  }

  let doingList = document.getElementById("doingTask");
  doingList.appendChild(taskToClone.cloneNode(true));

  let doneList = document.getElementById("doneTask");
  doneList.appendChild(taskToClone.cloneNode(true));

  let deleteTask = document.getElementById("deleteTask");
  deleteTask.appendChild(taskToClone.cloneNode(true));
});

const addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener("click", (event) => {
  const inputNameTaskForm = document.getElementById("nameTaskForm");
  console.log(inputNameTaskForm.value);
  const inputDescriptionTaskForm = document.getElementById("descTaskForm");
  console.log(inputDescriptionTaskForm.value);
  const inputPriorityForm = document.getElementById("priorityForm");
  console.log(inputPriorityForm.value);
  const inputStatusForm = document.getElementById("statusForm");
  console.log(inputStatusForm.value);

  event.preventDefault();
});

/* const deleteTaskButton = document.getElementById("deleteTask");
deleteTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
}) */

/* const orderTaskButton = document.getElementById("orderTask");
orderTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
}); */
