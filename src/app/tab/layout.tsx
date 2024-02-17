import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import Home from './home/layout';
import List from './list/layout';
import { api } from '../../api-client';
import { SafeArea } from '../../components';
import { ListsProvider } from '../../context/lists';

const Tab = createBottomTabNavigator();

function Layout() {
  return (
    <ApiProvider api={api}>
      <ListsProvider>
        <NavigationContainer>
          <SafeArea>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="List" component={List} />
            </Tab.Navigator>
          </SafeArea>
        </NavigationContainer>
      </ListsProvider>
    </ApiProvider>
  );
}

export default Layout;
