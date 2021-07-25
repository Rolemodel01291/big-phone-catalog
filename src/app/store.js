import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '../catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});
