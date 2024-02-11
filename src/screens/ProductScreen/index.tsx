import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './Products';
import Cart from './Cart';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const ProductScreen = () => {
  const navigation = useNavigation();

  const headerFun = useCallback(() => {
    return (
      <MyButton
        title={'Cart'}
        submit={() => navigation.navigate('cart')}
        disabled={false}
      />
    );
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'main'}
        component={Products}
        options={{headerRight: headerFun}}
      />
      <Stack.Screen name={'cart'} component={Cart} />
    </Stack.Navigator>
  );
};

export default ProductScreen;
