import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class ClassCom extends Component {
  render() {
    console.log('render');
    return (
      <View>
        <Text>ClassCom</Text>
      </View>
    );
  }
}

export default ClassCom;
