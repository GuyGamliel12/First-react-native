import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, SetItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);
  const [index, setIndex] = useState(4);
  const deleteItem = id => {
    SetItems(prevItem => {
      return prevItem.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'ok'}]);
    } else {
      setIndex(index + 1);
      SetItems(prevItem => {
        return [{id: index, text}, ...prevItem];
      });
    }
  };

  return (
    <View style={style.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
