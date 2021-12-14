import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Chat = ({name}) => {
  return (
    <View style={styles.chatcontainer}>
      <View style={styles.profilecontainer}>
        <Image
          source={require('../assets/images/punk8033.png')}
          style={styles.profileimage}></Image>
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txtname}>{name}</Text>
        <Text style={styles.txtmsg}>this is last Message...</Text>
      </View>
    </View>
  );
};

export default Chat;
const P100 = '100%';
const styles = StyleSheet.create({
  chatcontainer: {
    backgroundColor: '#FAF5EF',
    width: P100,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F3EFEA',
    borderBottomWidth: 1,
  },
  profilecontainer: {
    height: 55,
    width: 55,
    backgroundColor: '#000000',
    borderRadius: 35,
    marginLeft: 20,
  },
  profileimage: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: '#F65F65',
  },
  txtname: {
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    // paddingTop: 10,
  },
  txtmsg: {
    fontSize: 10,
    paddingBottom: 5,
    // marginBottom: 5,
    marginTop: -3,
    // marginLeft: 4,
    fontFamily: 'Poppins-Medium',
  },
  txtcontainer: {
    marginLeft: 10,
  },
});
