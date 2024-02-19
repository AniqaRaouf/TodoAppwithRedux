import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Reducers';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
