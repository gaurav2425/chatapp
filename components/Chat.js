import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Chat = () => {
  return (
    <View style={styles.chatcontainer}>
      <View style={styles.profilecontainer}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.profileimage}></Image>
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txtname}>Vijay Mehra</Text>
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
    // backgroundColor: '#000000',
    borderRadius: 30,
    marginLeft: 20,
  },
  profileimage: {
    height: 55,
    width: 55,
    borderRadius: 30,
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
    marginTop: -6,
    marginLeft: 4,
    fontFamily: 'Poppins-Medium',
  },
  txtcontainer: {
    marginLeft: 10,
  },
});
