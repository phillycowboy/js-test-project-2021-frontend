class Task{

    constructor(task){
        this.id = task.id
        this.activity = task.activity
        this.user_id = task.user_id
        this.addTask()
    }

    addTask(){
      const taskListArea = document.querySelector("#task-list-area");
      taskListArea.innerHTML +=  
      `<div class="task">
      <h2 id=${this.id}>${this.activity}</h2><br>
      <button class="edit-btn">EDIT</button><button class="delete-btn">DELETE</button><button class="com-btn">COMPLETE</button>
      </div>`
      
      
    }
  }