import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeScreen } from '../../components';
import { MoviesStackParamList } from '../tab/home/layout';

function Home({ route }: NativeStackScreenProps<MoviesStackParamList, 'Movie'>) {
  return <HomeScreen />;
}

export default Home;
