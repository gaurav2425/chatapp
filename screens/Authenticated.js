import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomTabNavigation from '../Navigation/BottomTabNavigation';
const Authenticated = () => {
  return <BottomTabNavigation></BottomTabNavigation>;
};

export default Authenticated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF5EF',
    fontFamily: 'Poppins-Medium',
  },
});
