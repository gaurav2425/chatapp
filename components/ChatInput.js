import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
// import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const ChatInput = ({message, send}) => {
  return (
    <View style={styles.chatinput}>
      <View style={styles.chatinputleft}>
        <MaterialCommunityIcons
          name="sticker-emoji"
          size={25}
          style={styles.inputicon1}></MaterialCommunityIcons>
      </View>
      <View style={styles.txtinputcontainer}>
        <TextInput
          placeholder="Type Something..."
          style={styles.txtinput}></TextInput>
      </View>
      <View style={styles.btn}>
        {message == '' ? (
          <View style={styles.iconsright}>
            <Entypo name="mic" size={20} style={styles.iconright1}></Entypo>
            <EvilIcons
              name="camera"
              size={30}
              style={styles.iconright2}></EvilIcons>

            <Entypo
              name="attachment"
              size={20}
              style={styles.iconright3}></Entypo>
          </View>
        ) : (
          <Ionicons
            name="ios-send-sharp"
            size={20}
            style={styles.btnsend}
            onPress={send}></Ionicons>
        )}
      </View>
    </View>
  );
};

export default ChatInput;
const P90 = '90%';

const styles = StyleSheet.create({
  chatinput: {
    display: 'flex',
    flexDirection: 'row',
    width: P90,
    // backgroundColor: '#FFFF',
    // backgroundColor: '#F3EBE0',
    backgroundColor: '#F3EBE0',
    backgroundColor: '#F65F69',
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
    height: 45,
    marginTop: 3,
  },
  txtinputcontainer: {
    height: 45,
    backgroundColor: '#FFFF',
  },
});
