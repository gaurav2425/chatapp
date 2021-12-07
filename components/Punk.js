import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Punk = ({url, selected}) => {
  return (
    <View style={styles.punkimgcontainermain}>
      <View style={styles.punkimgcontainer}>
        <Image
          source={{
            uri: `${url}`,
          }}
          // source={require('../assets/images/cryptopunk.png')}
          style={styles.punkimg}></Image>
        {selected ? (
          <View style={styles.righticoncontainer}>
            <Ionicons
              name="md-checkmark-circle-sharp"
              size={25}
              style={styles.righticon}></Ionicons>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Punk;

const styles = StyleSheet.create({
  punkimgcontainer: {
    width: 93,
    height: 93,
    // backgroundColor: '#FFFF',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 7,
    borderWidth: 2,
    borderColor: '#3E3C9C',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  punkimg: {
    width: 85,
    // maxWidth: 80,
    // maxHeight: 80,
    height: 85,
    borderRadius: 30,
  },
  righticoncontainer: {
    position: 'absolute',
    top: -2,
    color: '#000000',
    backgroundColor: '#FFFF',
    right: -8,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  righticon: {
    color: '#3E3C9C',
  },
  //   punkimgcontainermain: {
  //     backgroundColor: '#F65F65',
  //     alignItems: 'center',
  //   },
});
