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
  uniqueGenres: string[];
}

const initialState: GamesState = {
  games: [],
  uniqueGenres: []
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    storeGames: (state, action: PayloadAction<GameData[]>) => {
      state.games = action.payload;
      state.uniqueGenres = Array.from(new Set(action.payload.map(game => game.genre)));
    },
  },
});


export const { storeGames } = gamesSlice.actions;

export default gamesSlice.reducer;