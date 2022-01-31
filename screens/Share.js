import React from 'react';
import {StyleSheet, Text, View, Linking, Alert} from 'react-native';
import {Button} from 'react-native-paper';

const Share = ({navigation}) => {
  const url = 'https://www.youtube.com/watch?v=g5Nztw08Q-k&t=17s';

  //   const openUrl = async () => {
  //     const isSupported = await Linking.canOpenURL(url);
  //     if (isSupported) {
  //       await Linking.openURL(
  //         `https://www.youtube.com/watch?v=g5Nztw08Q-k&t=17s`,
  //       );
  //     } else {
  //       Alert.alert("We can't Open this url");
  //     }
  //   };
  const OpenWEB = () => {
    navigation.navigate('browser', {url: 'https://www.youtube.com/'});
  };

  return (
    <View style={styles.sharecontainer}>
      <Button
        onPress={() => {
          OpenWEB();
        }}>
        Open Youtube
      </Button>
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({
  sharecontainer: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
  },
});
