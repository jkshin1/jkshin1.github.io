const loginForm = document.querySelector("#login-form")
const loinInput = loginForm.querySelector("#login-form input")
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME='hidden'
const USERNAME_KEY= 'username'

function onLoginSubmit(event){
    event.preventDefault()
    const username=loinInput.value
    localStorage.setItem(USERNAME_KEY,username)
    paintGreetings(username)
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText=`Hello ${username}`
    loginForm.classList.add(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
if(!savedUsername){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
}
else{
    paintGreetings(savedUsername)
}