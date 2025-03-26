import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const handleAddTask = () => {
        if (task) {
            dispatch(addTask({ id: Date.now(), text: task, priority: 'Medium' }));
            setTask('');
        }
    };
    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};
export default TaskInput;