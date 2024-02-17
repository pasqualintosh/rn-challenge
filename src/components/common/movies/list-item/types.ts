import { Movie } from '../../../../api-client/models/get-movie-list';

export interface IMovieListItemProps {
  movie: Movie;
  onPress?: () => void;
}
