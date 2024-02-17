import { isEqual } from 'lodash';
import React, { useContext, useMemo, useState } from 'react';

import { Movie } from '../api-client/models/get-movie-list';

type UseListsProvider = {
  favList: Movie[];
  watchList: Movie[];
  updateFavList?: (movie: Movie) => void;
  updateWatchList?: (movie: Movie) => void;
  isInFavList?: (movie: Movie) => number;
  isInWatchList?: (movie: Movie) => number;
};

export const ListsContext = React.createContext<UseListsProvider>({
  favList: [],
  watchList: [],
});

interface IProviderProps {
  children: React.ReactNode;
}
export function ListsProvider({ children }: IProviderProps) {
  const [favList, setFavList] = useState<Movie[]>([]);
  const [watchList, setWatchList] = useState<Movie[]>([]);

  const updateFavList = (movie: Movie): void => {
    if (
      isEqual(
        favList.findIndex((fav) => fav.id === movie.id),
        -1
      )
    ) {
      setFavList([...favList, movie]);
    } else {
      setFavList(favList.filter((fav) => fav.id !== movie.id));
    }
  };

  const updateWatchList = (movie: Movie): void => {
    if (
      isEqual(
        watchList.findIndex((fav) => fav.id === movie.id),
        -1
      )
    ) {
      setWatchList([...watchList, movie]);
    } else {
      setWatchList(watchList.filter((watch) => watch.id !== movie.id));
    }
  };

  const isInFavList = (movie: Movie): number => favList.findIndex((fav) => fav.id === movie.id);
  const isInWatchList = (movie: Movie): number => watchList.findIndex((fav) => fav.id === movie.id);

  const value = useMemo(() => {
    return {
      favList,
      watchList,
      updateFavList,
      updateWatchList,
      isInFavList,
      isInWatchList,
    };
  }, [favList, watchList, updateFavList, updateWatchList, isInFavList, isInWatchList]);

  return <ListsContext.Provider value={value}>{children}</ListsContext.Provider>;
}

export function useListsContext(): UseListsProvider {
  return useContext(ListsContext);
}
