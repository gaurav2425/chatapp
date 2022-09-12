import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Call = () => {
  return (
    <View style={styles.call_main_container}>
      <Text style={styles.call_txt}>Call Feature is under production!</Text>
    </View>
  );
};

export default Call;

const styles = StyleSheet.create({
  call_main_container: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  call_txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
});
