import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import TodoList from './TodoList';
import MyButton from '../../components/MyButton';
import {useDispatch} from 'react-redux';
import {add, set} from '../../features/todoListSlice';
import {TODO_KEY} from '../../consts';
import PersistanceHelper from '../../helpers/PersistanceHelper';
import TodoForm from './TodoForm';
import DatePicker from 'react-native-date-picker';

const TodoScreen = () => {
  const [title, setTitle] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [dueDate, setDueDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('todoscreen did mount');
    PersistanceHelper.getObject(TODO_KEY)
      .then(data => {
        console.log('data is:', data);
        dispatch(set(data));
      })
      .then(_ => setLoading(false))
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.main}>
      <DatePicker
        modal
        open={open}
        date={dueDate}
        onConfirm={date => {
          setOpen(false);
          setDueDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {loading === true ? (
        <View style={styles.loading}>
          <Text>loading...</Text>
        </View>
      ) : (
        <>
          <TodoList />
          <View style={styles.footer}>
            {showForm ? (
              <TodoForm
                title={title}
                description={description}
                dueDate={dueDate}
                setTitle={(val: string) => setTitle(val)}
                setDescription={(val: string) => setDescription(val)}
                submit={() =>
                  dispatch(
                    add({title, description, dueDate: dueDate.toString()}),
                  )
                }
                cancel={() => setShowForm(false)}
                setOpen={() => setOpen(true)}
              />
            ) : (
              <MyButton
                title={'add item'}
                disabled={false}
                submit={() => setShowForm(true)}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default TodoScreen;
