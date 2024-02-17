import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FavList from '../../top-tab/fav-list';
import WatchList from '../../top-tab/watch-list';

const Tab = createMaterialTopTabNavigator();

function Layout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FavList" component={FavList} />
      <Tab.Screen name="WatchList" component={WatchList} />
    </Tab.Navigator>
  );
}

export default Layout;
