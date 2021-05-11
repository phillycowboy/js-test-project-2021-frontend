const baseUrl = "http://localhost:3000/users";
const taskUrl = "http://localhost:3000/tasks";
const homeUrl = "http://localhost:3000/"

const welcomeMessage = document.querySelector("#welcome-message");
const signInMessage = document.querySelector("#sign-in-message");
const userForm = document.querySelector("#user-form");
const submitBtn = document.querySelector("#submit-form-button");
const taskDiv = document.querySelector("#task-div");
const taskH2 = document.querySelector("#task-h2");
const taskForm = document.querySelector("#task-form");
welcomeMessage.style.visibility = "hidden";    
signInMessage.style.visibility = "hidden";    
userForm.style.visibility = "hidden";    
taskDiv.style.visibility = "hidden";    

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
    .then(user => signInUser(user))
    
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
    fetch( taskUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
    },
        body: JSON.stringify({task:{activity: activity}})
    })
    .then( (response) => response.json())
    .then( (task) => console.log(task));
});






// const tasksBtn = document.querySelector("#tasks-btn");
// const usersBtn = document.querySelector("#users-btn");
// const homeBtn = document.querySelector("#home-btn");

// function getUsers() {
//      return fetch(baseUrl)
//     .then(res => res.json())
//     .then(data => renderUsers(data))
// };
// getUsers();

// function renderUsers(data){
//     // console.log(data);
    
//     for(let d of data){ 
//         let div = document.createElement('div');
//         document.body.append(div);
//         let h1 = document.createElement('h1');
//         h1.innerText = d.name;
//         div.appendChild(h1);
//         let h3 = document.createElement('h3');
//         h3.innerText = d.tasks[0].activity;
//         div.appendChild(h3);
//         let input = document.createElement('input');
//         input.type = "checkbox"
//         h3.appendChild(input);
        
//     }
// };

// function getTasks() {
//      return fetch(taskUrl)
//     .then(res => res.json())
//     .then(tasks => renderTasks(tasks))
// };
// getTasks();

// function renderTasks(tasks) {
//     for(let t of tasks){
//         let div = document.createElement('div');
//         document.body.append(div);
//         let h1 = document.createElement('h1');
//         h1.innerText = t.activity;
//         div.appendChild(h1);
//         console.log(t.user_id);
//     }
// };

// tasksBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     getTasks();
// });
// usersBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     getUsers();
// });
// homeBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     window.location.reload();
//     // console.log(e)
// })
