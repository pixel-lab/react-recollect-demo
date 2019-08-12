import React from 'react';
import { store } from 'react-recollect';

const Task =(props) => {   
    return (
        <div>
            <input type="checkbox" 
            checked={props.task.done} 
            onChange ={
                e => (props.task.done = e.target.checked)
            }
            />
            <input type="text" value={props.task.name} onChange = {
                e => (props.task.name = e.target.value)
            }/>
            <span
            onClick={() =>
                store.tasks = store.tasks.filter(task => task.id !== props.task.id )
            }
            >X</span>
        </div>
    )
}

export default Task;