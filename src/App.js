import React from 'react';
import './App.scss';
import ToDoApp from './components/toDoApp';

const App = () => {
    return (
      <div className="App">
        <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png"/>
        <ToDoApp/>
      </div>
    );
  }

export default App;
