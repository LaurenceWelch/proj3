import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyHeader from '../../components/MyHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListNav from '../ListNav';
import SettingsScreen from '../../screens/SettingsScreen';
import DashScreen from '../../screens/DashScreen';
import TodoScreen from '../../screens/TodoScreen';
import ProductScreen from '../../screens/ProductScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, color, size, route) => {
  const imap = {
    dash: ['person', 'person-outline'],
    list: ['list', 'list-outline'],
    settings: ['settings', 'settings-outline'],
  };
  const index = focused ? 0 : 1;
  const iconName = imap[route.name][index];
  return <Ionicons name={iconName} size={size} color={color} />;
};

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={'dash'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          TabBarIcon(focused, color, size, route),
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={'dash'} component={TodoScreen} />
      <Tab.Screen name={'list'} component={ProductScreen} />
      <Tab.Screen name={'settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;
