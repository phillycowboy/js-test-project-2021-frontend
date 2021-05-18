// move queryselectors and eventlisteners in here to call the class functions and get them working 
    // eventlistener calls function 
        // function handles logic styling and call instance method
            //instance method of class handles fetch  
// DO ONE FETCH AT A TIME TO MAKE YOUR LIFE EASIER 
const api = new ApiService

const logo = document.querySelector("#logo-text");
const welcomeMessage = document.querySelector("#welcome-message");
const signInMessage = document.querySelector("#sign-in-message");
const userForm = document.querySelector("#user-form");
const taskDiv = document.querySelector("#task-div");
const taskForm = document.querySelector("#task-form");

function init(){
    console.log("Dom has loaded");
    eventListener();
    displayUserForm();
}

function eventListener() {
    // add forms and eventlisteners here
    userForm.addEventListener("submit", function(event){
        signInUser(event)
    });
    taskForm.addEventListener("submit", function(event){
        createTask(event)
    })

}

function displayUserForm() {
    welcomeMessage.style.display = "block";
    signInMessage.style.display = "block";
    userForm.style.display = "block";
}

function hideUserForm() {
    logo.style.display = "none";
    welcomeMessage.style.display = "none";
    signInMessage.style.display = "none";
    userForm.style.display = "none";
}

function signInUser(event) {
    event.preventDefault();
    // console.log("This is the submit button");
    let user = {
        name: event.target[0].value,
        email: event.target[1].value
    }
    api.createNewUser(user)
    .then(response => {
        let currentUser = new User(response)
        const hiddenId = document.querySelector("#user_id")
        hiddenId.value = currentUser.id 
    })
    hideUserForm();
    displayTaskForm();
}

function displayTaskForm() {
    taskDiv.style.display = "block";
}

function createTask(event) {
    event.preventDefault()
    console.log(event)
    let task = {
        activity: event.target[0].value,
        user_id: event.target[1].value
    }
    api.createNewTask(task)
    .then(response => {
        let newTask = new Task(response)
        // newTask.innerText = task.activity
        const taskListArea = document.querySelector("#task-list-area");
        taskListArea.append(newTask)
    })
}





init();

// make helper functions to hide or display divs and forms 

// then worry aobut style/timeouts