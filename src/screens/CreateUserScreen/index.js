import {View, Text} from 'react-native';
import React from 'react';
import MyInput from '../../components/MyInput';

const CreateUserScreen = () => {
  return (
    <View>
      <MyInput val={''} placeholder={'username'} onChange={() => {}} />
    </View>
  );
};

export default CreateUserScreen;
