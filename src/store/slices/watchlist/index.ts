import { createSlice } from '@reduxjs/toolkit';

import { Movie } from '../../../api-client/models/get-movie-list';

const initialState = [] as WatchlistState;

const slice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    add: (state, { payload }: WatchlistPayload) => {
      return [...state, payload];
    },

    remove: (state, { payload }: WatchlistPayload) => {
      return state.filter((watch) => watch.id !== payload.id);
    },

    clear: () => {
      return initialState;
    },
  },
});

export const { clear, add, remove } = slice.actions;

export default slice.reducer;

export type WatchlistState = Movie[];

type WatchlistPayload = {
  payload: Movie;
};
