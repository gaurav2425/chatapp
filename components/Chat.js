import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../screens/ChatScreen';

const Chat = ({name}) => {
  let arrName = name.split(' ');

  // Select the first letter of the name
  let iniName = name.charAt(0).toUpperCase();

  // Select the first letter of the lastname
  let iniLname = arrName[arrName.length - 1].charAt(0).toUpperCase();

  return (
    <View style={styles.chatcontainer}>
      <View style={styles.profilecontainer}>
        {/* <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1533488069324-f9265c15d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.profileimage}></Image> */}
        {/* <Text style={styles.txtavatar}>
          {initial}
          {initial2}
          GB
        </Text> */}

        {name.indexOf(' ') >= 0 ? (
          <Text style={styles.txtavatar}>
            {iniName}
            {iniLname}
          </Text>
        ) : (
          <Text style={styles.txtavatar}>{iniName}</Text>
        )}
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txtname}>{name}</Text>
        {/* {name.indexOf(' ') >= 0 ? (
          <Text style={styles.txtmsg}>
            {iniName}
            {iniLname}
          </Text>
        ) : (
          <Text style={styles.txtmsg}>{iniName}</Text>
        )} */}

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
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    // paddingTop: 10,
  },
  txtmsg: {
    fontSize: 9,
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
    fontSize: 20,
    letterSpacing: 1,
  },
});
