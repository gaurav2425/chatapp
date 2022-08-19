import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loading = ({navigation}) => {
  useEffect(() => {
    LoadData = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.replace('home');
      } else {
        navigation.replace('initialscreen');
      }
    };
    LoadData();
  }, []);
  return (
    <View style={styles.loadingcontainer}>
      {/* <ActivityIndicator size={50} color="#3E3C9C" /> */}

      {/* <ActivityIndicator size={50} color="#F6421B" /> */}
      <Text style={styles.loadingtext}>Loading ...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF5EF',
    fontFamily: 'Poppins-Medium',
  },
  loadingtext: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#000000',
  },
});
