export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_PRIORITY = 'SET_PRIORITY';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
});
export const setPriority = (id, priority) => ({
    type: SET_PRIORITY,
    payload: { id, priority },
});
export const login = () => ({
    type: LOGIN,
});
export const logout = () => ({
    type: LOGOUT,
});