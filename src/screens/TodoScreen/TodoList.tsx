import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Todo} from '../../types';
import {RootState} from '../../store';
import MyHeader from '../../components/MyHeader';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import {remove} from '../../features/todoListSlice';

const TodoList = () => {
  console.log('todolist render');
  const data = useSelector((state: RootState) => state.todoList.list);
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ListItem
          id={item.id}
          title={item.title}
          description={item.description}
          dueDate={item.dueDate}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const ListItem = ({id, title, description, dueDate}: Todo) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <MyHeader>{title}</MyHeader>
      <MyText>{id}</MyText>
      <MyText>{description}</MyText>
      <Text>{dueDate}</Text>
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

export default TodoList;

const styles = StyleSheet.create({
  item: {backgroundColor: 'salmon', margin: 3},
  removeButtonView: {alignItems: 'center'},
});
