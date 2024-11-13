import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface DataItem {
    id: number;
    name: string;
}

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com' }),
    endpoints: (builder) => ({
        getData: builder.query<DataItem[], void>({
            query: () => '/api/data',
        }),
    }),
});

export const { useGetDataQuery } = apiSlice;
export default apiSlice;



//    documentation https://www.freetogame.com/api-doc