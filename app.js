const baseUrl = "http://localhost:3000/users";
const taskUrl = "http://localhost:3000/tasks";
const homeUrl = "http://localhost:3000/"

const welcomeMessage = document.querySelector("#welcome-message");
const signInMessage = document.querySelector("#sign-in-message");
const userForm = document.querySelector("#user-form");
const submitBtn = document.querySelector("#submit-form-button");
const taskDiv = document.querySelector("#task-div");
const editTaskDiv = document.querySelector("#edit-task-div");
const taskH2 = document.querySelector("#task-h2");
const taskForm = document.querySelector("#task-form");
const userId = document.querySelector("#user_id");
const taskListArea = document.querySelector("#task-list-area");
welcomeMessage.style.visibility = "hidden";    
signInMessage.style.visibility = "hidden";    
userForm.style.visibility = "hidden";    
taskDiv.style.visibility = "hidden"; 
editTaskDiv.style.display = "none"   

setTimeout(() => {
    welcomeMessage.style.visibility = "visible";
    // document.body.append(welcomeMessage);
    setTimeout(() => {
        signInMessage.style.visibility = "visible";
        setTimeout(() => {
            userForm.style.visibility = "visible";
        }, 1000);
    }, 1000);
}, 2000);

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    fetch(baseUrl, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
  },
        body: JSON.stringify({user: {name: name, email: email}})
    })
    .then(response => response.json())
    .then(user => {
        userId.value = user.id
        signInUser(user)
    })
    
});
 

function signInUser(user){
    welcomeMessage.style.visibility = "hidden";    
    signInMessage.style.visibility = "hidden";    
    userForm.style.visibility = "hidden"; 
    let welcomeH2 = document.createElement("h2");
    document.body.append(welcomeH2);
    welcomeH2.innerText = `Welcome, ${user.name}!`;
    welcomeH2.style.textAlign = "center";
    welcomeH2.style.transition = "ease-in";
    setTimeout(() => {
        welcomeH2.style.visibility = "hidden";
    }, 2000);
    appendTaskForm();
};

function appendTaskForm() {
    setTimeout(() => {
        taskDiv.style.visibility = "visible"
    }, 2000);
};

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
// you can grab the value from the form now you need to POST IT 
// I would start watching the videos and following along since you are going to have to move code into OOP eventually. 
    let activity = e.target[0].value
    let userId = e.target[1].value
    fetch( taskUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
    },
        body: JSON.stringify({task:{activity: activity, user_id: userId}})
    })
    .then( (response) => response.json())
    .then( (task) => createTask(task));
});
// let tasksArr = [];
function createTask(task) {
    let taskActivity = document.createElement('h4');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    let completeBtn = document.createElement('button');
    taskActivity.innerText = task.activity;
    taskActivity.id = task.id;
    taskListArea.append(taskActivity);
    editBtn.innerText = "EDIT";
    deleteBtn.innerText = "DELETE";
    completeBtn.innerText = "COMPLETE";
    taskActivity.append(editBtn, deleteBtn, completeBtn);
    // tasksArr.push(taskActivity);
    taskForm.reset();
    // now set event listeners for both  edit PATCH and delete DELETE buttons
    editBtn.addEventListener("click", (e) => {
        // console.log(e);
        //     fetch(`${taskUrl}/${task.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({task: {activity: task.activity, user_id: task.user_id}})
        // })
        // .then(response => response.json())
        // .then(task => editTask(task))
        editTask(e);
    });

    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault()
         fetch(`${taskUrl}/${task.id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then( () => deleteTask(e))
    })
    // return tasksArr;
}

function editTask(e) {
    taskDiv.style.display = "none";
    editTaskDiv.style.display = "block"
}

function deleteTask(e) {
    e.target.parentNode.remove();
}

 
// then --> PATCH request for edit button 
// set up fetch for patch -> pass it a function to repopulate the input field and then re type what your task is and append to dom
        // has an eventlistener and has a successful PATCH request but cannot update info on the DOM because it is undefined.

// then --> DELETE request for delete button
//      has an eventlisterner for the DELETE fetch, is deleting the right one in the DB but is only removing the first one in the list





