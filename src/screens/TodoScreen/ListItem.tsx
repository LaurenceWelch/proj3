import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import MyText from '../../components/MyText';
import MyHeader from '../../components/MyHeader';
import MyButton from '../../components/MyButton';
import {remove} from '../../features/todoListSlice';
import {Todo} from '../../types';

const ListItem = ({id, title, description, dueDate}: Todo) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <MyHeader>{title}</MyHeader>
      <MyText>due: {new Date(dueDate).toLocaleString('en-US')}</MyText>
      {/* <MyText>{id}</MyText> */}
      <MyText>description: {description}</MyText>
      <View style={styles.removeButtonView}>
        <MyButton
          title={'remove'}
          submit={() => {
            dispatch(remove(id));
          }}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {backgroundColor: 'salmon', margin: 3},
  removeButtonView: {alignItems: 'center'},
});
