import React, {memo, useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import PersistanceHelper from '../../helpers/PersistanceHelper';
import {TODO_KEY} from '../../consts';
import ListItem from './ListItem';
import {Todo} from '../../types';

const TodoList = () => {
  console.log('todolist render');
  const data = useSelector((state: RootState) => state.todoList);

  // async storage when the list changes
  useEffect(() => {
    console.log('todolist changed');
    console.log('data is blarg:', data);
    PersistanceHelper.setObject(TODO_KEY, data);
  }, [data]);

  const render = useCallback(
    ({item}: {item: Todo}) => (
      <ListItem
        id={item.id}
        title={item.title}
        description={item.description}
        dueDate={item.dueDate}
      />
    ),
    [],
  );

  const getKey = useCallback((_: any, index: number) => {
    return index.toString();
  }, []);

  return (
    <FlatList data={data.list} renderItem={render} keyExtractor={getKey} />
  );
};

export default memo(TodoList);
