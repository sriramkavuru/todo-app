import { ADD_TASK, DELETE_TASK, SET_PRIORITY, LOGIN, LOGOUT } from './actions';
const initialState = {
    tasks: [],
    isAuthenticated: false,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case SET_PRIORITY:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, priority: action.payload.priority } : task
                ),
            };
        case LOGIN:
            return { ...state, isAuthenticated: true };
        case LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};
export default rootReducer;