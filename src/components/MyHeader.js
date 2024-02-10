import {Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';

const MyHeader = ({children}) => {
  //console.log('render myheader');
  return <Text style={styles.text}>{children}</Text>;
};

export default memo(MyHeader);

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
});
