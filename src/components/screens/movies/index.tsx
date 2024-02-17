import { useNavigation } from '@react-navigation/native';
import { FlatList, ListRenderItem } from 'react-native';

import { Wrapper } from './styled';
import { baseImageUrl, useGetMovieListQuery } from '../../../api-client';
import { Movie } from '../../../api-client/models/get-movie-list';
import { MoviesStackNavigation } from '../../../app/tab/home/layout';
import Error from '../../common/error';
import Loader from '../../common/loader';
import MovieListItem from '../../common/movies/list-item';

function HomeScreen() {
  const navigation = useNavigation<MoviesStackNavigation>();
  const { data: moviesResponse, isLoading: isLoadingMovies, isError } = useGetMovieListQuery();

  const renderItem: ListRenderItem<Movie> | null | undefined = ({ item }) => (
    <MovieListItem
      movie={{ ...item, backdrop_path: baseImageUrl + item.backdrop_path }}
      onPress={() => {
        navigation.navigate({
          name: 'Detail',
          params: { movie: { ...item, backdrop_path: baseImageUrl + item.backdrop_path } },
          merge: true,
        });
      }}
    />
  );

  if (isLoadingMovies) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Wrapper>
      <FlatList data={moviesResponse?.results} renderItem={renderItem} />
    </Wrapper>
  );
}

export default HomeScreen;
