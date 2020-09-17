import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form>
                <input type="search"
                value={props.taskInput}
                name="taskInput"
                onChange={props.handleChanges}
                placeholder={"add task"}
                />
                <button onClick={event => {props.onSubmit(event)}}> Add task</button>
                <button onClick={event => {props.clearCompleted(event)}}> Clear</button>}
            </form>
        </div>
    )
}
export default Form; 