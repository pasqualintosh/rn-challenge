import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DetailScreen } from '../../components';
import { MoviesStackParamList } from '../tab/home/layout';

function Detail({ route }: NativeStackScreenProps<MoviesStackParamList, 'Detail'>) {
  return <DetailScreen movie={route.params.movie} />;
}

export default Detail;
