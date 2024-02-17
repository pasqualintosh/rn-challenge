import { truncate } from 'lodash';

import { Label, Poster, Row } from './styled';
import { IMovieListItemProps } from './types';

function MovieListItem({ movie, onPress }: IMovieListItemProps) {
  return (
    <Row onPress={onPress}>
      <Label>{truncate(movie.title, { length: 20 })}</Label>
      <Poster source={{ uri: movie.backdrop_path }} />
    </Row>
  );
}

export default MovieListItem;
