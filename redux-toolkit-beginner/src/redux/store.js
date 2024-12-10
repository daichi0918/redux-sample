import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userSliceReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSliceReducer,
  },
});
