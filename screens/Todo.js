import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from '../actions/index';

const Todo = () => {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.containertodo}>
        {/* onPress={() => dispatch(decNumber())} */}
        <TouchableOpacity onPress={() => dispatch(decNumber())}>
          <Text style={styles.txt}>Decrease</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>{myState}</Text>
        {/* {myState} */}
        {/* onPress={() => dispatch(incNumber())} */}
        <TouchableOpacity onPress={() => dispatch(incNumber())}>
          <Text style={styles.txt}>Increase</Text>
        </TouchableOpacity>
      </View>
      <Text>Hello</Text>
      <StatusBar barStyle="dark-content"></StatusBar>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    backgroundColor: '#FAF5EF',
  },
  containertodo: {
    width: 250,
    display: 'flex',
    justifyContent: 'space-around',
    // backgroundColor: '#FFFF',
    flexDirection: 'row',
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    color: '#000000',
  },
});
