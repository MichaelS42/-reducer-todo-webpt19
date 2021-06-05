import React from 'react';

const TaskList = (props) => {
    return (
        <div>
            {props.state.tasks.map(tasks => {
                return (
                    <div
                        key={tasks.id}
                        onClick={() => props.toggleTask(tasks.id)}
                        className={`tasks${tasks.completed ? "completed" : "" }`}>
                        <h2>{tasks.item}</h2>
                    </div>
                        )
                    }
                )
            }
        </div>
    )
}
export default TaskList; 
