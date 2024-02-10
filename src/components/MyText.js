import {StyleSheet, Text} from 'react-native';
import React, {memo} from 'react';

const MyText = props => {
  //console.log('render mytext');
  return (
    <Text
      maxFontSizeMultiplier={2}
      numberOfLines={props.numberOfLines}
      style={styles.text}>
      {props.children}
    </Text>
  );
};

MyText.defaultProps = {
  numberOfLines: 0,
};

export default memo(MyText);

const styles = StyleSheet.create({
  text: {fontSize: 18, margin: 4},
});
