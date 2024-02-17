import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './home/layout';
import List from './list/layout';
import { SafeArea } from '../../components';
import { persistor, store } from '../../store';

const Tab = createBottomTabNavigator();

function Layout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SafeArea>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="List" component={List} />
            </Tab.Navigator>
          </SafeArea>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default Layout;
