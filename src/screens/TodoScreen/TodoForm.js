import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import MyText from '../../components/MyText';

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
      <TouchableOpacity style={styles.date} onPress={() => props.setOpen(true)}>
        <MyText>due: {props.dueDate.toLocaleString('en-US')}</MyText>
      </TouchableOpacity>
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
        <MyButton title={'close'} disabled={false} submit={props.cancel} />
      </View>
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  main: {flex: 1},
  buttons: {flexDirection: 'row', justifyContent: 'center'},
  date: {backgroundColor: 'lavender', borderRadius: 10, padding: 3},
});
