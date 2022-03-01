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

  let todoList = document.getElementById("todoTask");
  todoList.appendChild(taskToClone);
  let doingList = document.getElementById("doingTask");
  doingList.appendChild(taskToClone);
  let doneList = document.getElementById("doneTask");
  doneList.appendChild(taskToClone);
  let deleteTask = document.getElementById("deleteTask");
  deleteTask.appendChild(taskToClone);
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

/* const orderTaskButton = document.getElementById("orderTask");
orderTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
});
const orderTaskButton = document.getElementById("deleteTask");
deleteTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
}); */