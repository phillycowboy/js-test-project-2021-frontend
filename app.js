const baseUrl = "http://localhost:3000/users";
const taskUrl = "http://localhost:3000/tasks";
const homeUrl = "http://localhost:3000/"

const welcomeMessage = document.querySelector("#welcome-message");
const signInMessage = document.querySelector("#sign-in-message");
const userForm = document.querySelector("#user-form");
const submitBtn = document.querySelector("#submit-form-button");
const taskDiv = document.querySelector("#task-div");
const editTaskDiv = document.querySelector("#edit-task-div");
const editTaskForm = document.querySelector(".edit-task-form");
const taskH2 = document.querySelector("#task-h2");
const taskForm = document.querySelector("#task-form");
const userId = document.querySelector("#user_id");
const taskListArea = document.querySelector("#task-list-area");
 
setTimeout(() => {
    welcomeMessage.style.display = "block";
    setTimeout(() => {
        signInMessage.style.display = "block";
        setTimeout(() => {
            userForm.style.display = "block";
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
    welcomeMessage.style.display = "none";    
    signInMessage.style.display = "none";    
    userForm.style.display = "none"; 
    let welcomeH2 = document.createElement("h2");
    document.body.append(welcomeH2);
    welcomeH2.innerText = `Welcome, ${user.name}!`;
    welcomeH2.style.textAlign = "center";
    welcomeH2.style.transition = "ease-in";
    setTimeout(() => {
        welcomeH2.style.display = "none";
        // welcomeH2.style.textAlign = "center";
    }, 2000);
    appendTaskForm();
};

function appendTaskForm() {
    setTimeout(() => {
        taskDiv.style.display = "block";
    }, 2000);
};

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
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

function createTask(task) {
    let taskActivity = document.createElement('h4');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    let completeBtn = document.createElement('button');
    taskActivity.id = task.id;
    taskActivity.innerText = task.activity;
    taskListArea.append(taskActivity);
    editBtn.innerText = "EDIT";
    deleteBtn.innerText = "DELETE";
    deleteBtn.id = "delete-btn";
    completeBtn.innerText = "COMPLETE";
    taskActivity.append(editBtn, deleteBtn, completeBtn);
    taskForm.reset();
    editBtn.addEventListener("click", (e) => {
        e.preventDefault();
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
}

function editTask(e) {
    console.log("first edit event", e);
    e.preventDefault();
    editTaskForm.id = e.target.parentNode.id;
    taskDiv.style.display = "none";
    editTaskDiv.style.display = "block"
    let btnWords = ["EDIT", "DELETE", "COMPLETE"];
    let taskToEdit = e.target.parentNode.innerText;
    btnWords.forEach((word) => {
        taskToEdit = taskToEdit.replace(word, '');
    });
    e.target.parentNode.remove();
    editTaskForm.childNodes[1].value = taskToEdit;
    editTaskForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        console.log("edit event", event);
        fetch(`${taskUrl}/${event.target.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({task: {activity: event.target[0].value}})
        })
        .then(response => response.json())
        .then(task =>  {
            console.log(task)
            updatedTask(task)
        })

    });


    // on edit submit have it create the h4. 
}

function updatedTask(task){
    editTaskDiv.style.display = "none";
    taskDiv.style.display = "block";
    createTask(task);
    // append it back to the dom 
}

function deleteTask(e) {
    e.target.parentNode.remove();
    console.log("delete event", e);
    
}

 
// then --> PATCH request for edit button 
// set up fetch for patch -> pass it a function to repopulate the input field and then re type what your task is and append to dom
    //    switch the forms from create to edit 
    //  repopulate the edit form input and remove the h4 
    // on edit submit patch the new h4







