import React, { Suspense, useEffect, useState } from "react"
import Button from "./Button"
import "./toDo.scss"
const TaskContainer = React.lazy(() => import("./TaskContainer"));
export const TaskFunctionalContext = React.createContext({})
export const FilterContext = React.createContext({})
const ToDoApp = () => {
    // constructor() {
    //     super()
    //     this.state = {
    //         value: "",
    //         toDoList: [],
    //         toDoListCopy: [],
    //         isWarning: false
    //     }
    //     this.textInput = React.createRef();
    // }
    const [value, setValue] = useState('')
    const [toDoList, setToDoList] = useState([])
    const [toDoListCopy, setToDoListCopy] = useState([])
    const [isWarning, setIsWarning] = useState(false)

    useEffect(() => {
        setToDoListCopy(toDoList)
    }, [toDoList])

    const doneTask = (id) => {
        const result = toDoList.map((task)=>{
            if(task.id == id) {
                return  {...task,isDone: !task.isDone}
            }
            return task})
        setToDoList(result)

        // const resultCopy = toDoListCopy.map((task)=>{
        //         if(task.id == id) {
        //             return  {...task,isDone: !task.isDone}
        //         }
        //         return task
        //     })
        // setToDoListCopy(resultCopy)
    }

    const deleteTask = (id,event) => {
        event.stopPropagation()
        setToDoList(toDoList.filter((task) => task.id !== id))
        // setToDoListCopy(toDoList.filter((task) => task.id !== id))
    }

    const handleChange = (event) => {
        
        setValue(event.target.value)
        setIsWarning(false)
        
    }

    const taskCreate = () => {
        if(value) {
            if(toDoList.some(x => x.text === value)) {
                setIsWarning(true)
            } else {
                const newTask = {text: value, isDone: false, id: Date.now()}
                setToDoList((prevList) => [...prevList, newTask]);
                // setToDoListCopy((prevListCopy) => [...prevListCopy, newTask]);
            }
                setValue('')
                setIsWarning(false)
            }
            // this.textInput.current.focus();
        }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            taskCreate()
        }
    } 

    const editTask = (value, id) => {
        const result = toDoList.map((task)=>{
                if(task.id == id) {
                    return  {...task,text: value}
                }
                return task
            })
        setToDoList(result)
    }

    const deleteComplitedTask = () => {
        setToDoList(toDoList.filter((task) => !task.isDone))
        // setToDoListCopy(toDoList.filter((task) => !task.isDone))
    }

    const showActiveTask = () => {
        setToDoListCopy(toDoList.filter((task) => !task.isDone))
    }

    const showCompletedTask = () => {
        setToDoListCopy(toDoList.filter((task) => task.isDone))
    } 

    const showAllTask = () => {
        setToDoListCopy(toDoList)
    }

    const functionalContext = {
        editTask,
        doneTask,
        deleteTask
    }
    const filterContext = {
        activeTask: showActiveTask,
        completedTask: showCompletedTask,
        allTask: showAllTask,
        deleteCompletedTask: deleteComplitedTask
    }
    return (
        <div className="task-wraper">
            <div className="header">
                <h1 className="title">to do</h1>
                <div className="input-block">
                    <input className={isWarning ? 'warning' : ''} onKeyDown={handleKeyDown} 
                        value={value} onChange={handleChange}/>
                    <Button disabled={!value} onClick={taskCreate}>Create task</Button>
                </div>
            </div>
            {
                !!toDoListCopy.length && <Suspense fallback={<div>Loading</div>}>
                    <TaskFunctionalContext.Provider value={functionalContext}>
                        <FilterContext.Provider value={filterContext}>
                            <TaskContainer list={toDoListCopy} />
                        </FilterContext.Provider>
                    </TaskFunctionalContext.Provider>
                    </Suspense>
            }
        </div>
    )
}
export default ToDoApp 

