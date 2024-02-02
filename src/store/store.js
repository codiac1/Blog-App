import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../reducers/blogReducer';

export const store = configureStore({
  reducer: {
    blogReducer,
  },
});
