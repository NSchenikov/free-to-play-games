import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameData {
    id: number;
    title: string;
    genre: string;
    release_date: string;
    publisher: string;
    thumbnail: string;
}

interface GamesState {
  games: GameData[];
}

const initialState: GamesState = {
  games: [],
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    storeGames: (state, action: PayloadAction<GameData[]>) => {
      state.games = action.payload;
    },
  },
});


export const { storeGames } = gamesSlice.actions;

export default gamesSlice.reducer;