import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { Movie } from '../../../api-client/models/get-movie-list';
import Detail from '../../stack/detail';
import Home from '../../stack/home';

export type MoviesStackParamList = {
  Movie: object;
  Detail: { movie: Movie };
};

const Stack = createNativeStackNavigator<MoviesStackParamList>();

export type MoviesStackNavigation = NativeStackNavigationProp<MoviesStackParamList>;

function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movie" component={Home} options={{ headerTitle: 'Movies' }} />
      <Stack.Screen name="Detail" component={Detail} options={{ headerTitle: 'Detail' }} />
    </Stack.Navigator>
  );
}

export default Layout;
