import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ErrorText = props => {
  return (
    <View>
      <Text style={styles.text}>{props.val}</Text>
    </View>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {color: 'red'},
});
