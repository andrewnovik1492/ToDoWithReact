import React from "react";
import Task from "./Task";

function TaskContainer(props) {
    console.log(props)
    return (
        <div className="task-list">
            {props.list.map((task) => (
                <Task deleteTask={props.deleteTask} task={task} key={task.id}/>
            ))}
        </div>
    )
}

export default TaskContainer