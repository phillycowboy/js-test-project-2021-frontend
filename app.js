alert('the pages are linked');

// next thing to do is to try and get the users and the tasks through a fetch request. 
const baseUrl = "http://localhost:3000/users";

function getUsers() {
     return fetch(baseUrl)
    .then(res => res.json())
    .then(data => renderUsers(data))
};
getUsers();

function renderUsers(data){
    // console.log(data);
    
    for(let d of data){ 
        let div = document.createElement('div');
        document.body.append(div);
        let h1 = document.createElement('h1');
        h1.innerText = d.name;
        div.appendChild(h1);
        console.log(d.name);
        
    }
}

// console.log("hello");