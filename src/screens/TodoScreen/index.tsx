import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import TodoList from './TodoList';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import {useDispatch} from 'react-redux';
import {add, set} from '../../features/todoListSlice';
import PersistanceHelper from '../../helpers/PersistanceHelper';
import {TODO_KEY} from '../../consts';

const TodoScreen = () => {
  const [title, setTitle] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('todoscreen did mount');
    PersistanceHelper.getObject(TODO_KEY)
      .then(data => {
        console.log(data);
        dispatch(set(data));
      })
      .catch(e => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('todoscreen render');
  const form = (
    <View>
      <MyInput
        val={title}
        placeholder={'title'}
        onChange={(val: string) => setTitle(val)}
      />
      <MyInput
        val={description}
        placeholder={'description'}
        onChange={(val: string) => setDescription(val)}
      />
      <MyInput
        val={dueDate}
        placeholder={'due date'}
        onChange={(val: number) => setDueDate(val)}
      />
      <View style={styles.buttons}>
        <MyButton
          title={'submit'}
          disabled={title.length < 1 || description.length < 1 || dueDate < 1}
          submit={() => {
            dispatch(add({title, description, dueDate}));
          }}
        />
        <MyButton
          title={'cancel'}
          disabled={false}
          submit={() => setShowForm(false)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <TodoList />
      <View style={styles.footer}>
        {showForm ? (
          form
        ) : (
          <MyButton
            title={'add item'}
            disabled={false}
            submit={() => setShowForm(true)}
          />
        )}
      </View>
    </View>
  );
};

export default TodoScreen;
