import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ScreenStackNavigation from './Navigation/ScreenStackNavigation';

const Main = () => {
  return (
    <View style={styles.appcontainer}>
      <ScreenStackNavigation />
      <StatusBar barStyle="dark-content" backgroundColor="#FAF5EF"></StatusBar>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  appcontainer: {
    backgroundColor: '#FAF5EF',
    flex: 1,
  },
  txt: {
    color: '#000000',
  },
});
