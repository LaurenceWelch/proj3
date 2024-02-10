import React from 'react';
const {TouchableOpacity, Text, StyleSheet} = require('react-native');

type MyButton = {
  title: string;
  submit: Function;
  disabled: boolean;
};

const MyButton = (props: MyButton) => {
  return (
    <TouchableOpacity
      onPress={props.disabled ? () => {} : () => props.submit()}>
      <Text style={props.disabled ? styles.disabled : styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  text: {fontSize: 20, color: 'dodgerblue', margin: 10},
  disabled: {fontSize: 20, color: 'lightgray', margin: 10},
});
