class User{

    constructor(user){
        this.name = user.name 
        this.email = user.email 
        this.id = user.id
        this.addUser()
        this.task = user.tasks.forEach(task => new Task(task))
    }

    addUser(){
        // set hidden field of user id to this.id 
        const hiddenId = document.querySelector("#user_id")
        hiddenId.value = this.id 
    }
}