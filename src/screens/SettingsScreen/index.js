import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../../components/MyButton';
import styles from './styles';
import Confirm from '../../components/Confirm';
import {useUserContext} from '../../Context/UserContext';

const SettingsScreen = props => {
  const [showModal, setShowModal] = useState('false');
  const userContext = useUserContext();

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
      <MyButton title={'Logout'} submit={() => setShowModal(true)} />
    </View>
  );
};

export default SettingsScreen;
