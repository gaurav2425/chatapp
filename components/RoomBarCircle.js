import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const RoomBarCircle = ({url, title}) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.roombarcircle}
      // rippleColor="rgba(0, 0, 0, .1)"
      // borderless
    >
      <TouchableRipple
        onPress={() => {
          navigation.navigate('plaxroom');
        }}
        rippleColor="rgba(245, 245, 245, .1)"
        borderless
        style={styles.roombarcircleripple}>
        <Image
          style={styles.image}
          source={{
            uri: `${url}`,
          }}></Image>
      </TouchableRipple>
      <Text style={styles.roombarcircletxt}>{title}</Text>
    </View>
  );
};

export default RoomBarCircle;

const styles = StyleSheet.create({
  roombarcircle: {
    width: 75,
    height: 75,
    // backgroundColor: '#F65F65',
    borderRadius: 100,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  roombarcircleripple: {
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  roombarcircletxt: {
    fontSize: 10,
    color: '#000000',
    height: 20,
    fontFamily: 'Poppins-Medium',
    marginTop: 3,
  },
});
