import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface DataItem {
  id: number;
  title: string;
}

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }), 
    endpoints: (builder) => ({
      getGames: builder.query<DataItem[], void>({
        query: () => '/api/games', 
      }),
    }),
});


export const { useGetGamesQuery } = apiSlice;
export default apiSlice;



//    documentation https://www.freetogame.com/api-doc