class Task{

    constructor(task){
        this.id = task.id
        this.activity = task.activity
        this.user_id = task.user_id
        this.addTask()
    }

    addTask(){
      const taskListArea = document.querySelector("#task-list-area");
      taskListArea.innerHTML +=  `<h2 id=${this.id}>${this.activity}</h2><br><button>EDIT</button><button>DELETE</button><button>COMPLETE</button>`
    //   return this 
    }
}