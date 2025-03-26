import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles.css';
const App = () => {
    return (
        <Provider store={store}>
            <div className="background">
                <h1>To-Do Application</h1>
                <TaskInput />
                <TaskList />
            </div>
        </Provider>
    );
};
export default App;