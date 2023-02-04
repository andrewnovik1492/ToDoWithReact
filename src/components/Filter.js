import React, {useState, useContext, useEffect} from "react";
import "./toDo.scss";
import Button from "./Button";
import {FilterContext} from "./toDoApp";
const Filter = (props) => {
    
    const [filter, setFilter] = useState('All')
    // static contextType = FilterContext;
    // componentDidMount() {
    //     console.log('mount')
    // }
    useEffect(() => {
            if(filter == 'Active') {
                props.contextFilter.activeTask();
            }
            if(filter == 'All') {
                props.contextFilter.allTask();
            }
            if(filter == 'Completed') {
                props.contextFilter.completedTask();
            }
        }, [filter])

        return (
            <div className="filter">
                <div className="items">Tasks left {props.count}</div>
                <div className="link"> 
                    <Button onClick={() => setFilter('All')} active={filter == 'All'}>All</Button>
                    <Button onClick={() => setFilter('Active')} active={filter == 'Active'}>Active</Button>
                    <Button onClick={() => setFilter('Completed')} active={filter == 'Completed'}>Completed</Button>
                </div>
                <Button onClick={props.contextFilter.deleteCompletedTask}>Clear Completed</Button>
            </div>
        )
}




export default Filter