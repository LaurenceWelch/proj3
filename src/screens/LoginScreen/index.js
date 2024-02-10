import {ActivityIndicator, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import styles from './styles';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import LoginApi from '../../helpers/LoginApi';
import ErrorText from '../../components/ErrorText';
import {useUserContext} from '../../Context/UserContext';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);

  // callbacks
  const changeUsername = useCallback(ct => setUsername(ct), []);
  const changePassword = useCallback(ct => setPassword(ct), []);
  const notOkay = useMemo(() => {
    return username.length < 1 || password.length < 1;
  }, [username, password]);

  const userContext = useUserContext();

  console.log('render Login Screen');
  return (
    <View style={styles.main}>
      <View style={styles.box}>
        <MyInput
          val={username}
          placeholder={'username'}
          onChange={changeUsername}
        />
        <MyInput
          val={password}
          placeholder={'password'}
          onChange={changePassword}
          secureTextEntry={true}
        />
        {warning !== '' && <ErrorText val={warning} />}
        {loading ? (
          <ActivityIndicator />
        ) : (
          <MyButton
            disabled={notOkay}
            title={'submit'}
            submit={() => {
              setLoading(true);
              console.log(username, password);
              setWarning('');
              LoginApi.login(username, password)
                .then(data => userContext.login({name: username}))
                .catch(err => setWarning(err))
                .finally(() => setLoading(false));
            }}
          />
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
