import {View, Text, TextInput} from 'react-native';
import React, {useState, memo, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Com1 = () => {
  console.log('parent render');
  const [i1, setI1] = useState('');
  return (
    <View>
      <Text>home</Text>
      <TextInput value={i1} onChangeText={val => setI1(val)} />
    </View>
  );
};

const Com2 = () => {
  return (
    <View>
      <Text>second screen</Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name={'Home'} component={Com1} />
      <Drawer.Screen name={'Second'} component={Com2} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
