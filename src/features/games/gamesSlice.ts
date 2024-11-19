import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameData {
    id: number;
    title: string;
    genre: string;
    release_date: string;
    publisher: string;
    thumbnail: string;
    platform: string;
}

interface GamesState {
  games: GameData[];
  genres: string[];
  platforms: string[];
}

const initialState: GamesState = {
  games: [],
  genres: [],
  platforms: []
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    storeGames: (state, action: PayloadAction<GameData[]>) => {
      state.games = action.payload;
      state.genres = Array.from(new Set(action.payload.map(game => game.genre)));
      state.platforms = Array.from(new Set(action.payload.map(game => game.platform)));
    },
  },
});


export const { storeGames } = gamesSlice.actions;

export default gamesSlice.reducer;