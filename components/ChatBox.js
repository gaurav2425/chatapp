import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableRipple} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
// import {useNavigation} from '@react-navigation/native';

const ChatBox = () => {
  //   const navigation = useNavigation();
  return (
    <>
      <TouchableRipple
        rippleColor="rgba(0, 0, 0, 0.05)"
        borderless
        // onPress={() => {
        //   navigation.navigate('notification');
        // }}
        style={styles.chatbox}
        elevation={1.5}>
        <View style={styles.chatbox1}>
          <View style={styles.chatbox_txt}>
            <View>
              <Text style={styles.chat}>How crypto world is changing?</Text>

              <View style={{alignSelf: 'flex-start'}}>
                <Text style={styles.topic}>Cryptocurrency ✨</Text>
              </View>
              <Text style={styles.hashtags}>
                #cryptocurrency #NFT #Blockchain
              </Text>
            </View>

            <TouchableRipple
              rippleColor="rgba(0, 0, 0, .1)"
              borderless
              onPress={() => {
                console.log('Pressed');
              }}
              style={styles.rippledots}>
              <Entypo
                size={22}
                name="dots-two-vertical"
                style={styles.dotsicon}></Entypo>
            </TouchableRipple>
          </View>

          <View style={styles.host_container}>
            <View style={styles.image_user_images}>
              <Image
                source={{
                  uri: 'https://img.seadn.io/files/53ffe6133524547032288e5effe4d12a.png?fit=max&w=600',
                }}
                style={styles.host_profile}></Image>

              <Text style={styles.txt_no}>Gaurav Burande</Text>

              <Text style={styles.host_txt}>Host</Text>
            </View>
            <View style={styles.live_container}>
              <Feather size={22} name="radio" style={styles.live}></Feather>
              <Text style={styles.livetxt}>Live</Text>
            </View>
          </View>

          <View style={styles.image_users}>
            <View style={styles.image_user_images}>
              <Image
                source={{
                  uri: 'https://img.seadn.io/files/53ffe6133524547032288e5effe4d12a.png?fit=max&w=600',
                }}
                style={styles.profile_image1}></Image>
              <Image
                source={{
                  uri: 'https://img.seadn.io/files/53ffe6133524547032288e5effe4d12a.png?fit=max&w=600',
                }}
                style={styles.profile_image2}></Image>
              <Image
                source={{
                  uri: 'https://img.seadn.io/files/53ffe6133524547032288e5effe4d12a.png?fit=max&w=600',
                }}
                style={styles.profile_image3}></Image>
              <Text style={styles.txt_no}>+1.4k more chats</Text>
            </View>
            <View style={styles.txt_container}>
              <TouchableRipple
                rippleColor="rgba(0, 0, 0, .1)"
                borderless
                onPress={() => {
                  // console.log('Pressed');
                  navigation.navigate('chatscreen');
                }}
                style={styles.ripple}>
                <Ionicons
                  size={30}
                  name="chevron-forward"
                  style={styles.arrowicon}></Ionicons>
              </TouchableRipple>
            </View>
          </View>
          <View style={styles.timecontainer}>
            <Entypo size={25} name="dot-single" style={styles.doticon}></Entypo>
            <Text style={styles.time}>Started 10 min Ago</Text>
          </View>
        </View>
      </TouchableRipple>
    </>
  );
};

export default ChatBox;
const P90 = '91%';
const P100 = '100%';

const styles = StyleSheet.create({
  chatbox: {
    width: P90,
    // backgroundColor: '#FFFFFF',
    // paddingBottom: 10,

    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderWidth: 0.5,
    borderColor: '#EFE5D8',
  },
  chatbox1: {
    width: P100,
    backgroundColor: '#FFFFFF',
    paddingBottom: 10,
    borderRadius: 30,
    // marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  chatbox_txt: {
    width: P90,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rippledots: {
    height: 40,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  dotsicon: {
    color: '#000000',
  },
  image_users: {
    width: P90,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  host_container: {
    width: P90,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image_user_images: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chat: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 22,
    fontWeight: '600',
  },
  hashtags: {
    fontFamily: 'Poppins-Medium',
    color: '#696969',
    fontSize: 12,
  },
  txt_no: {
    fontFamily: 'Poppins-Medium',
    color: '#696969',
    fontSize: 12,
    marginLeft: 7,
  },
  profile_image1: {
    width: 30,
    height: 30,
    borderRadius: 13,
    marginRight: -10,
  },
  profile_image2: {
    width: 30,
    height: 30,
    borderRadius: 13,
    marginRight: -10,
  },
  profile_image3: {
    width: 30,
    height: 30,
    borderRadius: 13,
  },
  arrowicon: {
    color: '#000000',
  },
  live_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  live: {
    color: '#F12F12',
  },
  livetxt: {
    fontFamily: 'Poppins-Medium',
    color: '#F12F12',
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
  },

  host_profile: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  host_txt: {
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 100,
    backgroundColor: '#F65F65',
  },
  ripple: {
    padding: 5,
    borderRadius: 30,
  },
  timecontainer: {
    width: P90,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  time: {
    color: '#696969',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },
  doticon: {
    color: '#40DB0A',
  },
  topic: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    backgroundColor: '#FAF5EF',
    borderRadius: 8,
    padding: 1,
    paddingLeft: 4,
    paddingRight: 4,
  },
});
