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
const taskListArea = document.querySelector("#task-list-area");
const editTaskDiv = document.querySelector("#edit-task-div");
const editTaskForm = document.querySelector(".edit-task-form");
const homeBtn = document.querySelector(".home-btn");
const aboutBtn = document.querySelector(".about-btn");
const aboutDiv = document.querySelector("#about-div");
const contactBtn = document.querySelector(".contact-btn");
const contactDiv = document.querySelector("#contact-div");
const returnDiv = document.querySelector("#take-back-div");
const returnBtn = document.querySelector("#take-back-to-tasks");
const hiddenId = document.querySelector("#user_id");
const searchBar = document.querySelector("#search-bar");

// const toggleBtn = document.querySelector(".toggle-btn");

function init(){
    console.log("Dom has loaded");
    eventListener();
    displayUserForm();
}

function eventListener() {
    userForm.addEventListener("submit", function(event){
        event.preventDefault();
        signInUser(event)
        // hideUserForm();
        // displayTaskForm();
        // displayToDos();
    });
    taskForm.addEventListener("submit", function(event){
        createTask(event)
    });
    document.addEventListener("click", function(event){
        if(event.target.matches(".delete-btn")){
            removeTask(event)
        }
    });
    document.addEventListener("click", function(event){
        if(event.target.matches(".edit-btn")){
            editTaskOnDom(event)
        }
    });
    document.addEventListener("click", function(event){
        if(event.target.matches(".com-btn")){
            event.target.parentNode.style.textDecoration = "line-through"
        }
    });
    editTaskForm.addEventListener("submit", function(event){
        event.preventDefault();
        updateTaskOnDom(event);
    });
    homeBtn.addEventListener("click", function(event){
        console.log("this is the home btn")
        event.preventDefault();
        // if(hiddenId.value === ""){
        //     homeBtn.disabled = false
        //     hideReturnPage();
        //     console.log("button is disabled")
        // }else{
        //     homeBtn.disabled = true
        // }
        // hideTaskForm();
        // hideToDos();
        // displayReturnPage();
        // hideAboutDiv();
        // hideContactDiv();
        // hideTaskForm();
        // hideToDos();
        hideReturnPage();
        hideAboutDiv();
        hideContactDiv();
        if(hiddenId.value){
            displayReturnPage();
            hideTaskForm();
            hideToDos();
        }
    });
    aboutBtn.addEventListener("click", function(event){
        event.preventDefault();
        console.log("this is the about btn")
        displayAboutDiv();
        hideTaskForm();
        hideToDos();
        hideContactDiv();
        hideReturnPage();
        hideUserForm();

    });
    contactBtn.addEventListener("click", function(event){
        event.preventDefault();
        console.log("this is the contact btn")
        displayContactDiv();
        hideAboutDiv();
        hideReturnPage();
        hideUserForm();
        hideTaskForm();
        hideToDos();

    });
    returnBtn.addEventListener("click", function(event){
        event.preventDefault();
        console.log("This is the return button");
        hideReturnPage();
        displayTaskForm();
        displayToDos();

    });
    searchBar.addEventListener("keyup", function(e){
        // console.log(e.target.value)
        filterTasks(e)
    })
    // toggleBtn.addEventListener("click", function(event){
    //     event.preventDefault();
    //     console.log("This is the toggle button")
    //     if(navBar.className === "navbar" ){
    //         navBar.className = "navbar:hover";
    //     }else if(navBar.className === "navbar:hover"){
    //         navBar.className = "navbar";
    //     }
    // })



}

function displayUserForm() {
    logo.style.display = "block"
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
        // const hiddenId = document.querySelector("#user_id")
        // hiddenId.value = currentUser.id 
        console.log(response);
    })
    if(hiddenId.value){
        displayToDos();
    }
    hideUserForm();
    displayTaskForm();
}

function displayTaskForm() {
    taskDiv.style.display = "block";
}

function hideTaskForm() {
    taskDiv.style.display = "none";
}

function displayEditForm(){
    editTaskDiv.style.display = "block";
}

function hideEditForm(){
    editTaskDiv.style.display = "none";
}

function hideToDos(){
    taskListArea.style.display = "none";
}

function displayToDos() {
    taskListArea.style.display = "block";
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
        new Task(response)
        taskForm.reset()

        // let newTask =
        // const taskListArea = document.querySelector("#task-list-area");
        // taskListArea.append(newTask.activity)
        // const delBtn = document.querySelector("#delete-btn");
        // delBtn.addEventListener("click", function(e){
        //     console.log("delete event", e);
        // });
    })
}

function editTaskOnDom(event) {
    console.log("the event is working", event);
    hideTaskForm();
    displayEditForm();
    editTaskForm.childNodes[1].id = event.target.parentNode.childNodes[1].id
    editTaskForm.childNodes[1].value = event.target.parentNode.childNodes[1].innerText 
    event.target.parentNode.remove()
    // editTaskForm.addEventListener("submit", function(event){
    //     event.preventDefault();
    //     updateTaskOnDom(event);
    // })
}

function updateTaskOnDom(event) {
    let task =  event.target[0].value
    let id = event.target[0].id
    api.editTask(task, id)
    .then(response => new Task(response))
    hideEditForm();
    displayTaskForm();
  
}

function removeTask(event) {
    event.preventDefault();
    let id = event.target.parentNode.childNodes[1].id
    api.deleteTask(id)
    event.target.parentNode.remove()
}

function displayReturnPage() {
    logo.style.display = "block";
    welcomeMessage.style.display = "block";
    returnDiv.style.display = "block";
}

function hideReturnPage() {
    logo.style.display = "none";
    welcomeMessage.style.display = "none";
    returnDiv.style.display = "none";
}

function displayAboutDiv() {
    aboutDiv.style.display = "block"
}

function hideAboutDiv() {
    aboutDiv.style.display = "none"
}

function displayContactDiv() {
    contactDiv.style.display = "block"
}

function hideContactDiv() {
    contactDiv.style.display = "none"
}

function filterTasks(e){
    e.preventDefault();
    console.log(e.target.value)
    console.log(Task.all)
    let tasks = Task.all 
    let filteredTasks = tasks.filter( task => {
        // debugger
        // if(e.target.value.toLowerCase().matches(task.activity)){
        //     return task.activity
        // }
        return task.activity.toLowerCase().startsWith(e.target.value.toLowerCase())
        // return e.target.value.toLowerCase() === task.activity.toLowerCase()
    });
    console.log(filteredTasks);
    taskListArea.innerHTML = ""
    filteredTasks.forEach(t => {
       console.log(t)
        t.addTask()
    })
}






init();



// then worry aobut style/timeouts