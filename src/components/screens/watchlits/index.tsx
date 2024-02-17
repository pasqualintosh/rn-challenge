import { isEmpty } from 'lodash';
import { FlatList, ListRenderItem } from 'react-native';

import { Wrapper } from './styled';
import { baseImageUrl } from '../../../api-client';
import { Movie } from '../../../api-client/models/get-movie-list';
import useWatchList from '../../../hooks/use-watchlist';
import Empty from '../../common/empty';
import MovieListItem from '../../common/movies/list-item';

function WatchListScreen() {
  const { watchList } = useWatchList();

  const renderItem: ListRenderItem<Movie> | null | undefined = ({ item }) => (
    <MovieListItem movie={{ ...item, backdrop_path: baseImageUrl + item.backdrop_path }} />
  );

  if (isEmpty(watchList)) {
    return <Empty />;
  }

  return (
    <Wrapper>
      <FlatList data={watchList} renderItem={renderItem} />
    </Wrapper>
  );
}

export default WatchListScreen;
