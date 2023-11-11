const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")
const TODOS_KEY = 'todos'


let toDos = []

function saveToDos(){
   localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}
function deleteToDo(event){
   const li = event.target.parentElement
   li.remove()
   toDos = toDos.filter(item => item.id !==parseInt(li.id))
   saveToDos()
}

function paintToDo(newToDo){
   const li = document.createElement("li")
   li.id = newToDo.id
   const span = document.createElement("span")
   span.innerText= newToDo.text
   const button = document.createElement("button")
   button.style.marginLeft="5px"
   button.innerText="❌"
   button.addEventListener("click",deleteToDo)
   li.appendChild(span)
   li.appendChild(button)
   toDoList.appendChild(li)
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value
    toDoInput.value=''
    const newToDObj = {
      text:newToDo,
      id:Date.now()
    }
    toDos.push(newToDObj)
    paintToDo(newToDObj)
    saveToDos()
}
toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos)
   parsedToDos.forEach((item)=>paintToDo(item))
   toDos = parsedToDos
}