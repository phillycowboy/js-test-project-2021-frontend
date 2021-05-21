class User{

    constructor(user){
        this.name = user.name 
        this.email = user.email 
        this.id = user.id
        this.addUser()
        this.tasks = user.tasks.map((task) => new Task(task))
        console.log(this.tasks);
    }

    addUser(){
        // set hidden field of user id to this.id 
        // debugger
        const hiddenId = document.querySelector("#user_id")
        hiddenId.value = this.id 
    }
}