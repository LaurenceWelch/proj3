import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import TabScreen from '../TabNav';
import CreateUserScreen from '../../screens/CreateUserScreen';
import TodoScreen from '../../screens/TodoScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name={'Login'} component={TodoScreen} />
      <Stack.Screen name={'Register'} component={CreateUserScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
