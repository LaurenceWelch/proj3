import {View, StyleSheet} from 'react-native';
import React from 'react';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';

const TodoForm = props => {
  return (
    <View>
      <MyInput
        val={props.title}
        placeholder={'title'}
        onChange={val => props.setTitle(val)}
      />
      <MyInput
        val={props.description}
        placeholder={'description'}
        onChange={val => props.setDescription(val)}
      />
      <MyInput
        val={props.dueDate}
        placeholder={'due date'}
        onChange={val => props.setDueDate(val)}
      />
      <View style={styles.buttons}>
        <MyButton
          title={'submit'}
          disabled={
            props.title.length < 1 ||
            props.description.length < 1 ||
            props.dueDate < 1
          }
          submit={() => {
            props.submit();
          }}
        />
        <MyButton title={'cancel'} disabled={false} submit={props.cancel} />
      </View>
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  main: {flex: 1},
  buttons: {flexDirection: 'row'},
});
