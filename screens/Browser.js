import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
const Browser = () => {
  return (
    <View style={styles.webcontainer}>
      <WebView source={{uri: 'https://www.netflix.com/'}} />
    </View>
  );
};

export default Browser;

const styles = StyleSheet.create({
  webcontainer: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
  },
});
