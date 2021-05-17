class ApiService{
    constructor(){
        this.baseUrl = "http://localhost:3000/users";
        this.taskUrl = "http://localhost:3000/tasks";
        this.homeUrl = "http://localhost:3000/"
    }

    createNewUser(user){
        // let name = e.target[0].value;
        // let email = e.target[1].value;
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
             body: JSON.stringify({
                user: user 
            })
        })
        .then(response => response.json())
        .then(user => {
            userId.value = user.id
            signInUser(user)
        });
    }

    createNewTask(){
        return fetch( this.taskUrl, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({task:{activity: activity, user_id: userId}})
        })
        .then( (response) => response.json())
        .then( (task) => createTask(task));
    }

    editTask(task){
        fetch(this.taskUrl + task.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: task  
            })
        })
        .then(response => response.json())
        .then(task =>  {
            console.log(task)
            updatedTask(task)
        })
    }

    deleteTask(task){
        return fetch(this.taskUrl + task.id, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then( () => deleteTask(e))
    }
}
