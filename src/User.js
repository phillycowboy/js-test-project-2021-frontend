class User{

    constructor(user){
        this.name = user.name 
        this.email = user.email 
        this.id = user.id
        this.addUser()
    }

    addUser(){
        // set hidden field of user id to this.id 
        const hiddenId = document.querySelector("#user_id")
        hiddenId.value = this.id 
    }
}