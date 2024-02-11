import {View, FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {PRODUCTS} from '../../consts';
import {Product} from '../../types';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import {useDispatch} from 'react-redux';
import {add} from '../../features/cartSlice';

const Products = () => {
  const render = useCallback(
    ({item}: {item: Product}) => (
      <ListItem
        title={item.title}
        price={item.price}
        id={item.id}
        quantity={1}
        linePrice={item.linePrice}
      />
    ),
    [],
  );

  const getKey = useCallback((_: any, index: number) => {
    return index.toString();
  }, []);

  return (
    <View>
      <FlatList data={PRODUCTS} renderItem={render} keyExtractor={getKey} />
    </View>
  );
};

const ListItem = ({id, title, price}: Product) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.listItem}>
      <View style={styles.listText}>
        <MyText>{title}</MyText>
        <MyText>price: {price}</MyText>
      </View>
      <View style={styles.buttonView}>
        <MyButton
          title={'add to cart'}
          submit={() => {
            dispatch(add(id));
          }}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  listItem: {flex: 1, margin: 3, backgroundColor: 'bisque'},
  listText: {
    margin: 6,
    flex: 1,
    backgroundColor: 'mintcream',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  buttonView: {alignItems: 'center'},
});
