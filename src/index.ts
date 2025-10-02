
function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

type Task = {
   id: string,
  title: string,
  completed: boolean,
  createdAt: Date,
  
}

const list =  document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task[] = [ ]

form?.addEventListener("submit", e => {
  e.preventDefault()

  if(input?.value == "" || input?.value==null) return

  const newTask: Task = {
  id: generateId(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  }
  tasks.push(newTask)

  addListItem(newTask)
  input.value = " "
})

function addListItem (task: Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener ("change",() => {
    task.completed = checkbox.checked
    console.log(tasks)
  })
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
}