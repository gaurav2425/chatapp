import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../screens/ChatScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Chat = ({name}) => {
  let arrName = name.split(' ');

  // Select the first letter of the name
  let iniName = name.charAt(0).toUpperCase();

  // Select the first letter of the lastname
  let iniLname = arrName[arrName.length - 1].charAt(0).toUpperCase();

  return (
    <View style={styles.chatcontainer}>
      <View style={styles.profilecontainer}>
        <Image
          source={{
            // uri: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg',
            uri: 'https://images.pexels.com/photos/8903965/pexels-photo-8903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            // uri: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.profileimage}></Image>
        {/* <Text style={styles.txtavatar}>
          {initial}
          {initial2}
          GB
        </Text> */}

        {/* {name.indexOf(' ') >= 0 ? (
          <Text style={styles.txtavatar}>
            {iniName}
            {iniLname}
          </Text>
        ) : (
          <Text style={styles.txtavatar}>{iniName}</Text>
        )} */}
      </View>
      <View style={styles.txtcontainer}>
        <View style={styles.txtcontainer_up}>
          <Text style={styles.txtname}>{name}</Text>

          <View style={styles.txtcontainer_date}>
            <View>
              <Text style={styles.txttime}>12:15 am</Text>
            </View>

            <View style={styles.notificationno}>
              <View style={styles.notificationnosub}>
                <Text style={styles.notificationnotxt}>2</Text>
              </View>
            </View>

            {/* <Ionicons
              name="chevron-forward-outline"
              size={15}
              style={styles.txtcontainer_forward_icon}></Ionicons> */}
          </View>
        </View>
        {/* {name.indexOf(' ') >= 0 ? (
          <Text style={styles.txtmsg}>
            {iniName}
            {iniLname}
          </Text>
        ) : (
          <Text style={styles.txtmsg}>{iniName}</Text>
        )} */}

        <Text style={styles.txtmsg}>Hey! I will try to let them down</Text>
      </View>
    </View>
  );
};

export default Chat;
const P100 = '100%';
const P90 = '90%';
const styles = StyleSheet.create({
  chatcontainer: {
    backgroundColor: '#FAF5EF',
    width: P100,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#696969',
    // borderBottomColor: '#F65F65',
    // borderBottomWidth: 1,
  },

  profilecontainer: {
    // height: 55,
    // width: 58,
    height: 50,
    width: 50,
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
    height: 53,
    width: 53,
    borderRadius: 27,
    // backgroundColor: '#F65F65',
  },
  txtname: {
    fontSize: 17,
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    // paddingTop: 10,
  },
  txtmsg: {
    fontSize: 10,
    paddingBottom: 5,
    // marginBottom: 5,
    marginTop: -10,
    // marginLeft: 4,
    fontFamily: 'Poppins-Medium',
  },
  txtcontainer: {
    marginLeft: 10,
    // backgroundColor: '#F65F65',
    // width: P90,
    justifyContent: 'space-between',
    display: 'flex',
    // height: 70,
    paddingBottom: 10,
    // paddingTop: 10,
    marginBottom: -10,
    flex: 1,
    borderColor: '#F1EFE5',
    borderBottomColor: '#F1EFE5',
    borderBottomWidth: 4,
  },
  txtavatar: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 20,
    letterSpacing: 1,
  },
  txttime: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 10,
  },
  txtcontainer_up: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#FFFF',
  },
  txtcontainer_date: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,

    // backgroundColor: '#FFFF',
    // width: 150,
  },
  txtcontainer_forward_icon: {
    color: '#000000',
    // backgroundColor: '#696969',
    marginTop: -3,
  },
  notificationnotxt: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFF',
    fontSize: 9,
  },
  notificationnosub: {
    width: 20,
    height: 20,
    backgroundColor: '#ff4d4d',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationno: {
    // position: 'absolute',
    width: 22,
    height: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    // left: 17,
    top: 5,
  },
});
