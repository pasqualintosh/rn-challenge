import { createSlice } from '@reduxjs/toolkit';

import { Movie } from '../../../api-client/models/get-movie-list';

const initialState = [] as FavlistState;

const slice = createSlice({
  name: 'favlist',
  initialState,
  reducers: {
    add: (state, { payload }: FavlistPayload) => {
      return [...state, payload];
    },

    remove: (state, { payload }: FavlistPayload) => {
      return state.filter((fav) => fav.id !== payload.id);
    },

    clear: () => {
      return initialState;
    },
  },
});

export const { clear, add, remove } = slice.actions;

export default slice.reducer;

export type FavlistState = Movie[];

type FavlistPayload = {
  payload: Movie;
};
