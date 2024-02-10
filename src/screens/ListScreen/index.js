import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import DataApi from '../../helpers/DataApi';
import ListItem from './ListItem';
import styles from './styles';

const ListScreen = props => {
  const [data, setData] = useState([]);
  const [error, SetError] = useState('');
  const [loading, setLoading] = useState(true);

  // get data
  useEffect(() => {
    DataApi.get('https://jsonplaceholder.typicode.com/posts')
      .then(fd => {
        setData(fd);
        setLoading(false);
      })
      .catch(err => SetError(err.toString()));
  }, []);

  // render item for flatlist
  const renderFun = useCallback(
    ({item}) => {
      return <ListItem val={item} navigation={props.navigation} />;
    },
    [props.navigation],
  );

  // get key for flatlist
  const getKey = useCallback((val, index) => {
    return val.id;
  }, []);

  console.log('list render');
  return (
    <View>
      {error !== '' ? (
        <View style={styles.errorMain}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : loading ? (
        <ActivityIndicator style={styles.spinner} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderFun}
          keyExtractor={getKey}
          initialNumToRender={8}
          maxToRenderPerBatch={8}
        />
      )}
    </View>
  );
};

export default ListScreen;
