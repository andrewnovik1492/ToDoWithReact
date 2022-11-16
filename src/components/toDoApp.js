import React from "react"
import Button from "./Button"
import "./toDo.scss"
import TaskContainer from "./TaskContainer"
class ToDoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            value: "",
            toDoList: [{text: "ghj", isDone: false, id: 1},]
        }
    }
    deleteTask = (id) => {
        this.setState({
            toDoList: this.state.toDoList.filter((task) => task.id != id)
        })
    }
    handleChange = (event) => {
        
        this.setState({
            value: event.target.value
        })
    }
    taskCreate = () => {
        if(this.state.value) {
            const newTask = {text: this.state.value, isDone: false, id: Date.now()}
            this.setState({
                toDoList: [...this.state.toDoList, newTask]
            })
        }
    }
    render() {
        return (
            <div className="task-wraper">
                <div className="header">
                    <h1 className="title">to do</h1>
                    <div className="input-block">
                        <input value={this.state.value} onChange={this.handleChange}/>
                        <Button onClick={this.taskCreate}>Create app</Button>
                    </div>
                </div>
                <TaskContainer deleteTask={this.deleteTask} list={this.state.toDoList}/>
            </div>
        )
    }
}
export default ToDoApp 

