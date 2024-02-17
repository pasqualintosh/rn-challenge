import { isEqual } from 'lodash';
import { useEffect } from 'react';

import { Movie } from '../api-client/models/get-movie-list';
import { useAppDispatch, useAppSelector } from '../store/redux-hooks';
import { add, remove } from '../store/slices/favlist';

export default function useFavList() {
  const favList = useAppSelector((state) => state.favlist);

  const dispatch = useAppDispatch();

  const updateFavList = (movie: Movie): void => {
    if (
      isEqual(
        favList.findIndex((fav) => fav.id === movie.id),
        -1
      )
    ) {
      dispatch(add(movie));
    } else {
      dispatch(remove(movie));
    }
  };

  const isInFavList = (movie: Movie): boolean =>
    isEqual(
      favList.findIndex((fav) => fav.id === movie.id),
      -1
    );

  return { favList, updateFavList, isInFavList };
}
