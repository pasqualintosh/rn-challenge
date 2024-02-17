import {
  Poster,
  Title,
  Overview,
  Wrapper,
  FavButton,
  LabelButton,
  ButtonsWrapper,
  WatchButton,
} from './styled';
import { IDetailScreenProps } from './types';
import { useListsContext } from '../../../context/lists';

function DetailScreen({ movie }: IDetailScreenProps) {
  const { isInFavList, isInWatchList, updateFavList, updateWatchList } = useListsContext();

  const addOrRemoveFav = isInFavList?.(movie) ? 'Add' : 'Remove';
  const addOrRemoveWatch = isInWatchList?.(movie) ? 'Add' : 'Remove';

  const handleFavPress = () => updateFavList?.(movie);
  const handleWatchPress = () => updateWatchList?.(movie);

  return (
    <Wrapper>
      <Poster source={{ uri: movie.backdrop_path }} />
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
      <ButtonsWrapper>
        <FavButton onPress={handleFavPress}>
          <LabelButton>{addOrRemoveFav} to fav</LabelButton>
        </FavButton>
        <WatchButton onPress={handleWatchPress}>
          <LabelButton>{addOrRemoveWatch} to watch</LabelButton>
        </WatchButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default DetailScreen;
