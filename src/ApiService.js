class ApiService{
    constructor(){
        this.baseUrl = "http://localhost:3000/users";
        this.taskUrl = "http://localhost:3000/tasks";
        this.homeUrl = "http://localhost:3000/"
    }

    createNewUser(user){
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
    }

    createNewTask(task){
        return fetch( this.taskUrl, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                task: task 
            })
        })
        .then( (response) => response.json())
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
