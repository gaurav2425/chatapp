import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../screens/ChatScreen';
const Chat = ({name}) => {
  const fullName = name.split(' ');
  // const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  // console.log(initials.toUpperCase());

  const initial = fullName[0].charAt(0).toUpperCase();
  const initial2 = fullName[0].charAt(1).toUpperCase();
  console.log(initial);
  return (
    <View style={styles.chatcontainer}>
      <View style={styles.profilecontainer}>
        {/* <Image
          source={require('../assets/images/punk8033.png')}
          style={styles.profileimage}></Image> */}
        <Text style={styles.txtavatar}>
          {initial}
          {initial2}
        </Text>
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txtname}>{name}</Text>
        {/* <Text style={styles.txtmsg}>{colors.name}</Text> */}
        <Text style={styles.txtmsg}>Kya pta bhai</Text>
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
    width: 58,
    backgroundColor: '#F3EBE0',
    borderRadius: 27,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtavatar: {
    fontSize: 10,
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
  txtavatar: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 19,
  },
});
