import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.splashscreen}>
      <Image
        style={styles.profileimage}
        source={require('../assets/images/PLAX4.png')}></Image>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashscreen: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimage: {
    width: 150,
    height: 100,
    marginBottom: 100,
  },
});
