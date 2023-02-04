import React, { useContext } from "react";
import Task from "./Task";
import Filter from "./Filter";
import {FilterContext, TaskFunctionalContext} from "./toDoApp"
function TaskContainer(props) {
    const TaskContext = useContext(TaskFunctionalContext);
    const filterContext = useContext(FilterContext)
    return (
            <TaskFunctionalContext.Consumer>
                {(value) => (
                    <div className="task-list">
                        <div className="task-list-container">
                            {props.list.map((task) => (
                                <Task context={TaskContext} task={task} key={task.id}/>
                            ))}
                        </div>
                            <Filter contextFilter={filterContext} count={props.list.length}/>
                    </div>
                )}
            </TaskFunctionalContext.Consumer>
    )
}

export default TaskContainer