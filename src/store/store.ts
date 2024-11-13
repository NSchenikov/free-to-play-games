// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';

const store = configureStore({
  reducer: {
    // Добавьте редюсер API
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Добавьте middleware API
});

export default store;

// Типизация для RootState и AppDispatch (для использования с useSelector и useDispatch, если потребуется)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;