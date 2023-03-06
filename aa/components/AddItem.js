import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
function AddItem({addItem}) {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={style.textInput}
        onChangeText={onChange}
      />
      <TouchableOpacity style={style.btn} onPress={() => addItem(text)}>
        <Text style={style.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  textInput: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default AddItem;
