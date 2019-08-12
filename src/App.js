import React from 'react';
import { collect, store } from 'react-recollect';
import Task from './Task';
debugger;

const TaskList = () => (
  <div>
    {store.tasks.length ? store.tasks.map(task => (      
      <Task key={task.id} task={task} />
    )): null}
    
    <button onClick={() => {
      store.tasks.push({
        name: 'A new task',
        done: false,
        id: Math.random()
      });
    }}>
      Add a task
    </button>
  </div>
);
 
export default collect(TaskList);