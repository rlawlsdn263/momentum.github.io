/* Option A
const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
*/

//Option B 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");
//const loginBtn = document.querySelector("#login-form button");


//str
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";


/*
function clickBtnHandler() {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name!");
    } else if (username.length > 15) {
        alert("You name is too long!")
    }
}
*/

function submitEventHandler(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greetings.innerText = `Hello ${username}`;
    greetings.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", submitEventHandler);
} else {
    paintGreetings(savedUsername);
}

/* 2nd Option - Try to understand and compare
function submitEventHandler(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greetings.innerText = `Hello ${username}`;
    greetings.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", submitEventHandler);
} else {
    paintGreetings();
}
*/