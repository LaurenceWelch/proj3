import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './Products';
import Cart from './Cart';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {clear} from '../../features/cartSlice';
import Confirm from '../../components/Confirm';

const Stack = createNativeStackNavigator();

const ProductScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const headerFun = useCallback(() => {
    return (
      <MyButton
        title={'Cart'}
        submit={() => navigation.navigate('cart' as never)}
        disabled={false}
      />
    );
  }, [navigation]);

  const clearFun = useCallback(() => {
    return (
      <MyButton
        title={'clear'}
        submit={() => setShowModal(true)}
        disabled={false}
      />
    );
  }, []);

  return (
    <View style={styles.mainStack}>
      {showModal && (
        <Confirm
          title={'are you sure?'}
          submit={() => {
            dispatch(clear());
            setShowModal(false);
          }}
          cancel={() => setShowModal(false)}
        />
      )}
      <Stack.Navigator>
        <Stack.Screen
          name={'main'}
          component={Products}
          options={{headerRight: headerFun}}
        />
        <Stack.Screen
          name={'cart'}
          component={Cart}
          options={{headerRight: clearFun}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ProductScreen;
