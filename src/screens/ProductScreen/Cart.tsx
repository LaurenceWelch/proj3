import {View, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Product} from '../../types';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import {add, removeAll, removeOne} from '../../features/cartSlice';

const Cart = () => {
  const data = useSelector((state: RootState) => state.cart);
  console.log('data:', data);

  const render = useCallback(({item}: {item: Product}) => {
    return (
      <ListItem
        id={item.id}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        linePrice={item.linePrice}
      />
    );
  }, []);

  const getKey = useCallback((_: any, index: number) => {
    return index.toString();
  }, []);

  return (
    <View>
      <FlatList
        ListFooterComponent={Footer}
        data={data.list}
        renderItem={render}
        keyExtractor={getKey}
      />
    </View>
  );
};

const Footer = () => {
  const total = useSelector((state: RootState) => state.cart.totalPrice);
  return (
    <View style={styles.footer}>
      <MyText>total price: ${total}</MyText>
    </View>
  );
};

const ListItem = ({id, title, quantity, price, linePrice}: Product) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.listItem}>
      <MyText>
        {title}: ${price}
      </MyText>
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <MyText>quantity: {quantity}</MyText>
          <MyButton
            title={'-'}
            submit={() => dispatch(removeOne(id))}
            disabled={false}
          />
          <MyButton
            title={'+'}
            submit={() => dispatch(add(id))}
            disabled={false}
          />
          <MyButton
            title={'x'}
            submit={() => dispatch(removeAll(id))}
            disabled={false}
          />
        </View>
      </View>
      <View style={styles.linePrice}>
        <MyText>line price: ${linePrice}</MyText>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'wheat',
    margin: 3,
    padding: 3,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    flexDirection: 'row',
    backgroundColor: 'thistle',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  linePrice: {
    alignItems: 'flex-end',
  },
  footer: {
    alignItems: 'flex-end',
    backgroundColor: 'peachpuff',
    margin: 3,
    padding: 3,
  },
});
