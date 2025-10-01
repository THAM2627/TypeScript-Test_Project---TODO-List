const list =  document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("#new-task-form") as HTMLFormElement
const input = document.querySelector<HTMLInputElement>("#new-task-title")

form.addEventListener("submit", e => {
  e.preventDefault()

  if(input?.value == "" || input?.value==null) return

  const task = {
    id:
    title:
    completed: false,
    createdAt: new Date,
  }
  input.value
})