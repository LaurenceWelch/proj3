import {Text, View} from 'react-native';
import React, {useRef} from 'react';
import {useUserContext} from '../../Context/UserContext';
import MyHeader from '../../components/MyHeader';
import MyText from '../../components/MyText';
import styles from './styles';

const DashScreen = () => {
  const counter = useRef(0);
  const userContext = useUserContext();
  counter.current += 1;
  return (
    <View style={styles.name}>
      <MyHeader>Welcome {userContext.user.name}</MyHeader>
      <Text style={styles.text}>renders: {counter.current}</Text>
    </View>
  );
};

export default DashScreen;
