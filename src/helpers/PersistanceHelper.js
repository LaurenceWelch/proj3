import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  setValue = (key, value) => {
    try {
      AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  getObject = async key => {
    try {
      const stringifiedObject = await this.getValue(key);
      console.log(stringifiedObject);
      console.log('STRINGIFIED ^');
      const obj = JSON.parse(stringifiedObject);
      console.log('parsed object:', obj);
      if (Object.keys(obj).length === 0) {
        throw new Error('empty object found');
      }
      return JSON.parse(stringifiedObject);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  setObject = (key, valueObject) => {
    console.log('set object', valueObject);
    const stringifiedObject = JSON.stringify(valueObject);
    this.setValue(key, stringifiedObject);
  };
}

export default new PersistanceHelper();
