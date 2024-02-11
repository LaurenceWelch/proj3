import {View, Text, Modal, StyleSheet} from 'react-native';
import React from 'react';
import MyButton from './MyButton';

const Confirm = props => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.main}>
        <View style={styles.modal}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.buttons}>
            <MyButton title={'yes'} submit={props.submit} />
            <MyButton title={'cancel'} submit={props.cancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 16},
  modal: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
