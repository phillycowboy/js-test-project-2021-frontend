// alert('the pages are linked');

// you have both users and tasks through a fetch request.
// Now what you need to focus on is how to get a form to submit and have the users tasks be pulled up 
// how to add check box for task to be completed 
// how to edit/delete a task 

const baseUrl = "http://localhost:3000/users";
const taskUrl = "http://localhost:3000/tasks";
const tasksBtn = document.querySelector("#tasks-btn");
const usersBtn = document.querySelector("#users-btn");

function getUsers() {
     return fetch(baseUrl)
    .then(res => res.json())
    .then(data => renderUsers(data))
};
// getUsers();

function renderUsers(data){
    // console.log(data);
    
    for(let d of data){ 
        let div = document.createElement('div');
        document.body.append(div);
        let h1 = document.createElement('h1');
        h1.innerText = d.name;
        div.appendChild(h1);
        let h3 = document.createElement('h3');
        h3.innerText = d.tasks[0].activity;
        div.appendChild(h3);
        let input = document.createElement('input');
        input.type = "checkbox"
        h3.appendChild(input);
        
    }
};

function getTasks() {
     return fetch(taskUrl)
    .then(res => res.json())
    .then(tasks => renderTasks(tasks))
};
// getTasks();

function renderTasks(tasks) {
    for(let t of tasks){
        let div = document.createElement('div');
        document.body.append(div);
        let h1 = document.createElement('h1');
        h1.innerText = t.activity;
        div.appendChild(h1);
        console.log(t.user_id);
    }
};

tasksBtn.addEventListener('click', () => {
    getTasks();
})
usersBtn.addEventListener('click', () => {
    getUsers();
})