class Task{

    constructor(task){
        this.activity = task.activity
        this.user_id = task.user_id
        this.addTask()
    }

    addTask(){
      this.innerHTML =  `<h2>${this.activity}</h2><button>EDIT</button><button>DELETE</button><button>COMPLETE</button>`
      return this 
    }
}