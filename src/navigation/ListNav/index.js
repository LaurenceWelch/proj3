import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from '../../screens/ListScreen';
import DetailScreen from '../../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const ListNav = () => {
  return (
    <Stack.Navigator initialRouteName={'items'}>
      <Stack.Screen name={'items'} component={ListScreen} />
      <Stack.Screen name={'detail'} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default ListNav;
