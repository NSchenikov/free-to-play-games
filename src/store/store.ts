import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import gamesReducer from '../features/games/gamesSlice'; // Импортируем gamesSlice

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    games: gamesReducer, // Добавляем gamesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;