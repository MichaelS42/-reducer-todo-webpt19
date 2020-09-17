import  React, { useState, useReducer } from 'react';
import './App.css';
import TaskList from './TaskList'
import Form from './components/Form';

import { initialState, reducer } from "./reducer"


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTaskItem, setNewTaskItem] = useState("");

    const handleChanges = event => {
      event.preventDefault();
      setNewTaskItem(event.target.value)
    }

    const onSubmit = event => {
      event.preventDefault();
      dispatch({type: "ADD_TASK", payload: newTaskItem})
    }

    const toggleTask = item => {
      dispatch({ type: "TOGGLE_TASK", payload: item})
    }
    
    const clearCompleted = event => {
      event.preventDefault();
      dispatch({ type: "CLEAR_TASK"})
    }

    return (
      <div>
        <h1>hello</h1>
        <Form
          onSubmit={onSubmit}
          clearCompleted={clearCompleted}
          handleChanges={handleChanges}
          state={state}
        />
        <TaskList
          state={state}
          toggleTask={toggleTask}
        />
    </div>
  );
}

export default App;