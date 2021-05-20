class Task{

    constructor(task){
        this.id = task.id
        this.activity = task.activity
        this.user_id = task.user_id
        this.addTask()
    }

    addTask(){
      const taskListArea = document.querySelector("#task-list-area");
    //   let colors = ["#eddd4c", "#47eaed", "#e396de"];
    //   let randomColor = colors[Math.floor(Math.random() * colors.length)];
      taskListArea.innerHTML +=  
      `<div class="task">
      <h2 id=${this.id}>${this.activity}</h2><br>
      <button class="edit-btn">EDIT</button><button class="delete-btn">DELETE</button><button class="com-btn">COMPLETE</button>
      </div>`
    //   let postIt = document.getElementsByClassName("task")
    //   postIt.style.backgroundColor = randomColor;
    //   return this 
    }
}