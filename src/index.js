import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './App';

import {store} from 'react-recollect'

store.tasks = [{
    name: 'A task',
    done: true,
    id: Math.random()
}]

ReactDOM.render(<TaskList />, document.getElementById('root'));

