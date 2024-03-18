import { apiSlice } from '../api/apiSlice';

const travelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTravelPost: builder.query<any, number>({
      query: (page) => ({
        url: `/api/v1/auth/signup/duplicate-email?email=${page}`,

        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTravelPostQuery } = travelApiSlice;
