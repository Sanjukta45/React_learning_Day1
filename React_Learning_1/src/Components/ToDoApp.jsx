import { useState } from "react";

function ToDoApp() {
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);

    function addTask(){
        setTasks([...tasks,task]);
        setTask("");
    }

    return(
    <div>
       <h1>To Do App</h1>
       <input type="text"
       placeholder="Enter Task"
       value={task} 
       onChange={(e)=>{setTask(e.target.value)}}/>
       <button onClick={addTask} style={{margin:"10px", backgroundColor: "green"}}>Add Task</button>
      { tasks.length === 0 ? (
        <p>No tasks added yet.</p>
       ) : (
        <ul>
            {tasks.map((t,index) => (
                
                <li key={index}>
                    {t}
                    <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))} style={{margin:"10px", backgroundColor: "red", color: "white"}}>Remove Task</button>
                    </li>
                
              
            ))}
        </ul>
       )}
       <br />
       <button onClick={() => setTasks([])} style={{backgroundColor: "red", color: "white"}}>Reset</button>
     </div>
    );
}

export default ToDoApp;