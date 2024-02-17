import { isEmpty } from 'lodash';
import { FlatList, ListRenderItem } from 'react-native';

import { Wrapper } from './styled';
import { baseImageUrl } from '../../../api-client';
import { Movie } from '../../../api-client/models/get-movie-list';
import useFavList from '../../../hooks/use-favlist';
import Empty from '../../common/empty';
import MovieListItem from '../../common/movies/list-item';

function FavouritesScreen() {
  const { favList } = useFavList();

  const renderItem: ListRenderItem<Movie> | null | undefined = ({ item }) => (
    <MovieListItem movie={{ ...item, backdrop_path: baseImageUrl + item.backdrop_path }} />
  );

  if (isEmpty(favList)) {
    return <Empty />;
  }

  return (
    <Wrapper>
      <FlatList data={favList} renderItem={renderItem} />
    </Wrapper>
  );
}

export default FavouritesScreen;
