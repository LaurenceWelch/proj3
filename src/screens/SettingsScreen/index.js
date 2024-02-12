import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../../components/MyButton';
import styles from './styles';
import Confirm from '../../components/Confirm';
import {useUserContext} from '../../Context/UserContext';
import * as Sentry from '@sentry/react-native';

const SettingsScreen = props => {
  const [showModal, setShowModal] = useState('false');
  const userContext = useUserContext();

  //throw new Error('sentry error!');

  return (
    <View style={styles.main}>
      <Confirm
        title={'Do you really want to Logout?'}
        visible={showModal}
        submit={() => {
          props.navigation.navigate('dash');
          userContext.logout();
        }}
        cancel={() => setShowModal(false)}
      />
      <Button
        title="Try!"
        onPress={() => {
          Sentry.captureException(new Error('First error'));
        }}
      />
      <MyButton title={'Logout'} submit={() => setShowModal(true)} />
    </View>
  );
};

export default SettingsScreen;
