import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '../../../redux/counter/counterSlice';

const Home = () => {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter : {countValue}</Text>
      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.Increment_button}
          onPress={() => {
            dispatch(increment());
          }}>
          <Text style={styles.button_text}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Decrement_button}
          onPress={() => {
            dispatch(decrement());
          }}>
          <Text style={styles.button_text}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.reset_button}
          onPress={() => {
            dispatch(reset());
          }}>
          <Text style={styles.button_text}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textInput_container}>
        <TextInput
          style={styles.textInput}
          keyboardType={'number-pad'}
          onChangeText={setAmount}
        />
        <TouchableOpacity
          style={styles.IncrementByAmount_button}
          onPress={() => {
            dispatch(incrementByAmount(amount));
          }}>
          <Text style={styles.button_text}>Increment By Amount</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Increment_button: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Decrement_button: {
    backgroundColor: 'darkred',
    width: 100,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    marginTop: 20,
    width: 300,
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button_text: {
    color: 'white',
  },
  textInput: {
    backgroundColor: '#d4d4d4',
    borderRadius: 20,
    width: 50,
    textAlign: 'center',
  },
  IncrementByAmount_button: {
    backgroundColor: 'darkblue',
    width: 200,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
    width: 350,
  },
  reset_button: {
    backgroundColor: 'darkorange',
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
