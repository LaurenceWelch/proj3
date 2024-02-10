import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeScreen = props => {
  console.log(props);
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
        <Text>details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Tabs')}>
        <Text>tabs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Drawer')}>
        <Text>drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
