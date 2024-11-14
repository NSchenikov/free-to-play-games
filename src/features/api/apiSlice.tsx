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
  platform?: string;
}

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getGames: builder.query<DataItem[], GetGamesQueryArgs>({
      query: ({ genre, platform }) => {
        const queryParams = new URLSearchParams();
        if (genre) queryParams.append('genre', genre);
        if (platform) queryParams.append('platform', platform);
        return `/api/games?${queryParams.toString()}`;
      },
    }),
  }),
});

export const { useGetGamesQuery } = apiSlice;
export default apiSlice;



//    documentation https://www.freetogame.com/api-doc