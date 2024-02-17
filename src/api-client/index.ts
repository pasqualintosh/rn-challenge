import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICreateGuestSessionResponse } from './models/create-guest-session';
import { IGetMovieListResponse } from './models/get-movie-list';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjA5MTEyZWVhNjA3MTc0YTNiODM0MzU1NDRhZWY3YSIsInN1YiI6IjY1Y2Y2YzA0OWFjNTM1MDE2MmRmZTBiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGQqRenhoHzcmwqnHDmDgp8GE2JfwGsbQeqhyTGwK7g';

const baseUrl = 'https://api.themoviedb.org';
export const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
export const approveGuestToken = (token: string) =>
  `https://www.themoviedb.org/authenticate/${token}`;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    createGuestSession: builder.query<ICreateGuestSessionResponse, void>({
      query: () => ({
        url: '/3/authentication/guest_session/new',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
      }),
    }),

    getMovieList: builder.query<IGetMovieListResponse, void>({
      query: () => ({
        url: '/3/discover/movie',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
      }),
    }),
  }),
});

export const { useGetMovieListQuery, useLazyCreateGuestSessionQuery } = api;
