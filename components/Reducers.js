import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, MARK_TASK_COMPLETE } from './Actions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
      };
    case REMOVE_TASK:
      // Prevent removing a task if it's not completed
      console.log(action.payload,"action.payload.completed")
      if (action.payload.completed) {
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.id),
        };
      } else {
        return state; // Return the current state without any changes
      }
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case MARK_TASK_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
