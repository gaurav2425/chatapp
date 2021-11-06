import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableRipple} from 'react-native-paper';
// import {useSelector, useDispatch} from 'react-redux';

const ProfileScreen = () => {
  // const myState = useSelector(state => state.changeTheNumber);
  return (
    <SafeAreaView style={styles.container_main}>
      <View style={styles.profileheader}>
        <Ionicons
          name="chevron-back"
          size={30}
          style={{color: '#000000'}}></Ionicons>
        <View style={styles.profileheaderright}>
          <Ionicons
            name="share-social-outline"
            size={25}
            style={styles.profileheaderrighticon1}></Ionicons>
          {/* <Text>{myState}</Text> */}
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profileheaderrighticon2ripple}>
            <Feather
              name="settings"
              size={25}
              style={styles.profileheaderrighticon2}></Feather>
          </TouchableRipple>
        </View>
      </View>

      <View style={styles.profileline}>
        <View style={styles.profile}>
          <Image
            style={styles.profileimage}
            source={require('../assets/images/myimg.jpeg')}></Image>
        </View>
      </View>

      <View style={styles.nameline}>
        <Text style={styles.textname}>Gaurav Burande</Text>
        <Text style={styles.textusername}>@iamgaurav</Text>
      </View>

      <View style={styles.followline}>
        <Text style={styles.friendstxt}>Friends 198</Text>
        {/* <Text style={styles.text4}>Following 15</Text> */}
      </View>

      <View style={styles.bio}>
        <Text style={styles.biotxt}>
          Build anything from console widgets to mobile applications, with our
          free and easy to use API. We provide data on current global outbreaks,
          including COVID-19 and Influenza.
        </Text>
      </View>

      {/* <View style={styles.bioline}>
        <Text style={styles.text5}>Add a bio </Text>
        <AntDesign name="plus" size={15}></AntDesign>
      </View> */}

      {/* <StatusBar barStyle="dark-content"></StatusBar> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const P100 = '100%';
const styles = StyleSheet.create({
  container_main: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
  },

  profileheader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FFFF',
    flex: 0.09,
    color: '#000000',
  },
  profileheaderright: {
    display: 'flex',
    flexDirection: 'row',
    color: '#000000',
  },
  profileheaderrighticon2: {
    // marginRight: 20,
    color: '#000000',
  },
  profileheaderrighticon1: {
    marginRight: 30,
    color: '#000000',
  },
  profileline: {
    flex: 0.18,
    // backgroundColor: '#808080',
    justifyContent: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 45,
    backgroundColor: '#FFFF',
    marginLeft: 20,
  },
  profileimage: {
    width: 100,
    height: 100,
    borderRadius: 45,
    zIndex: -1,
  },

  nameline: {
    flex: 0.1,
    justifyContent: 'center',
  },
  textname: {
    marginLeft: 25,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  textusername: {
    marginLeft: 25,
    fontSize: 12,
    // paddingTop: 3,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  followline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    flex: 0.08,
  },
  friendstxt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    marginLeft: 2,
  },
  text3: {},
  text4: {
    // fontWeight: "700",
    marginLeft: 20,
  },
  bioline: {
    backgroundColor: '#FFFF',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center',
    flex: 0.05,
  },
  biotxt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    marginLeft: 25,
    fontSize: 11,
    paddingRight: 20,
  },
  text5: {
    color: '#728FCE',
  },
  socialline: {
    display: 'flex',
    flexDirection: 'row',

    // backgroundColor: "#FFFF",
    paddingLeft: 25,
    alignItems: 'center',
  },
  profileheaderrighticon2ripple: {
    marginRight: 20,
    padding: 10,
    borderRadius: 30,
  },
});
