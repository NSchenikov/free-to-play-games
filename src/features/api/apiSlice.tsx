import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface DataItem {
  id: number;
  title: string;
  release_date: string;
  publisher: string;
  genre: string;
  thumbnail: string;
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
    getGame: builder.query<DataItem, number>({
      query: (id) => `/api/game?id=${id}`, 
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = apiSlice;
export default apiSlice;