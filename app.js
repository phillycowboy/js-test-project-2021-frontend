// alert('the pages are linked');

// you have both users and tasks through a fetch request.[X]
// Now what you need to focus on is how to get a form to submit and have the users tasks be pulled up[] 
// have a user add a task, form should be hidden until button is clicked and hide it again on second click 
// refer to toy tale and their addToy form []
// how to add check box for task to be completed  [X]
// how to edit/delete a task []
// create a home button that goes to the base url of app []

const baseUrl = "http://localhost:3000/users";
const taskUrl = "http://localhost:3000/tasks";
const homeUrl = "http://localhost:3000/"
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
