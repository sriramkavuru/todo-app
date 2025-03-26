import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, setPriority } from '../redux/actions';
const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.text} - Priority: {task.priority}
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                    <select onChange={(e) => dispatch(setPriority(task.id, e.target.value))}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </li>
            ))}
        </ul>
    );
};
export default TaskList;