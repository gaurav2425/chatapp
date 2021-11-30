import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RoomChat = ({chatname, message}) => {
  return (
    <View style={styles.chatcontainer}>
      <View style={styles.imagecontainer}>
        <Image
          source={require('../assets/images/vk.jpg')}
          style={styles.image}></Image>
      </View>
      <View style={styles.txtcontainer}>
        <View style={styles.txtcontainerpart1}>
          <Text style={styles.txt}>{chatname}</Text>
          <MaterialIcons
            name="verified"
            style={styles.verifyicon}></MaterialIcons>
        </View>
        <View style={styles.txtcontainerpart2}>
          <Text style={styles.txt1}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default RoomChat;

const width = '70%';
// const txtwidth = "79%";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  chatcontainer: {
    height: 70,
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: "#FFFF",
    backgroundColor: '#FAF5EF',
    // backgroundColor: '#606060',

    marginTop: 1,
    alignItems: 'center',
  },
  imagecontainer: {
    width: 55,
    height: 55,
    backgroundColor: '#0000',
    borderRadius: 40,
    marginLeft: 15,
  },
  txt: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    // left: 10,
    fontSize: 14,
    marginTop: 2,
    // fontWeight: "700",
    letterSpacing: 0.2,
    color: '#000000',
    fontFamily: 'Poppins-BlackItalic',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
  txtcontainer: {
    height: 70,
    // width: txtwidth,
    // borderBottomWidth: 1,
    // borderBottomColor: "#FFE4E1",
    // backgroundColor: "#FFE4E1",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  txt1: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    left: 10,
    marginTop: -3,
    fontSize: 11,
    // marginTop: 0,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  txttime: {
    color: '#708090',
  },
  txtcontainer1: {
    position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#708090',
  },
  txt2: {
    fontSize: 10,
    color: '#FF69B4',
  },
  msgnotification: {
    width: 20,
    height: 20,
    backgroundColor: '#FF69B4',
    backgroundColor: '#FFE4E1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  txt3: {
    color: '#000000',
    backgroundColor: '#FFFF',
    fontSize: 10,
  },
  txtcontainerpart1: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FF69B4',
    // alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  verifyicon: {
    left: 5,
    color: '#32CD32',
    marginTop: 7,
  },
});
