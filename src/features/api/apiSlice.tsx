import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface DataItem {
  id: number;
  title: string;
  release_date: string;
  publisher: string;
  genre: string;
  thumbnail: string;
}

export interface ScreenshotItem {
  id: number;
  image: string;
}

export interface MinimumSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface GameItem {
  id: number;
  title: string;
  release_date: string;
  developer: string;
  genre: string;
  thumbnail: string;
  screenshots: ScreenshotItem[];
  minimum_system_requirements: MinimumSystemRequirements
}

interface GetGamesQueryArgs {
  genre?: string;
}

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }), 
  endpoints: (builder) => ({
    getGames: builder.query<DataItem[], GetGamesQueryArgs>({
      query: ({ genre }) => {
        if (genre) {
            return `/api/games?category=${genre}`; 
        }
        return `/api/games`; 
    }
    }),
    getGame: builder.query<GameItem, number>({
      query: (id) => `/api/game?id=${id}`, 
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = apiSlice;
export default apiSlice;