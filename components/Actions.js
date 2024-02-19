export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const MARK_TASK_COMPLETE = 'MARK_TASK_COMPLETE'; // New action type for marking a task as complete

export const addTask = (taskText) => ({
  type: ADD_TASK,
  payload: taskText,
});

export const removeTask = (taskId, completed) => ({ // Updated removeTask action creator to include completed flag
  type: REMOVE_TASK,
  payload: { id: taskId, completed },
});

export const markTaskComplete = (taskId) => ({ // Action creator for marking a task as complete
  type: MARK_TASK_COMPLETE,
  payload: taskId,
});
