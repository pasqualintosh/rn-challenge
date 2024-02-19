import { isEqual } from 'lodash';

import { Movie } from '../api-client/models/get-movie-list';
import { useAppDispatch, useAppSelector } from '../store/redux-hooks';
import { add, remove } from '../store/slices/watchlist';

export default function useWatchList() {
  const watchList = useAppSelector((state) => state.watchlist);

  const dispatch = useAppDispatch();

  const updateWatchList = (movie: Movie): void => {
    if (
      isEqual(
        watchList.findIndex((watch) => watch.id === movie.id),
        -1
      )
    ) {
      dispatch(add(movie));
    } else {
      dispatch(remove(movie));
    }
  };

  const isInWatchList = (movie: Movie): boolean =>
    !isEqual(
      watchList.findIndex((watch) => watch.id === movie.id),
      -1
    );

  return { watchList, updateWatchList, isInWatchList };
}
