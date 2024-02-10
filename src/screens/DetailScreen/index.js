import {ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import MyText from '../../components/MyText';
import styles from './styles';
import MyHeader from '../../components/MyHeader';

const DetailScreen = props => {
  useEffect(() => {
    console.log('detail mount');
  }, []);
  console.log('detail render');
  const {id, userId, title, body} = props.route.params;
  return (
    <ScrollView>
      <View style={styles.main}>
        <MyHeader>{title}</MyHeader>
        <View style={styles.ids}>
          <MyText>id: {id}</MyText>
          <MyText>userId: {userId}</MyText>
        </View>
        <MyText>{body}</MyText>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
