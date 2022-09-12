import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableRipple} from 'react-native-paper';
// import {useSelector, useDispatch} from 'react-redux';

const ProfileScreen = ({navigation}) => {
  // const myState = useSelector(state => state.changeTheNumber);
  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);
  console.log('From Profile Screen', MyProfileInfo.myprofile.name);
  console.log(MyProfileInfo.myprofile.bio);
  return (
    <SafeAreaView style={styles.container_main}>
      <View style={styles.profileheader}>
        {/* <Ionicons
          name="chevron-back"
          size={30}
          style={{color: '#000000'}}></Ionicons> */}
        <View style={styles.profileheaderleft}>
          <Text style={styles.username}>iamgauravx</Text>
        </View>

        <View style={styles.profileheaderright}>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profileheaderrighticon1ripple}>
            <AntDesign
              name="sharealt"
              size={24}
              style={styles.profileheaderrighticon1}></AntDesign>
          </TouchableRipple>

          {/* <Text>{myState}</Text> */}
          <TouchableRipple
            onPress={() => navigation.navigate('settings')}
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileline}>
          <View style={styles.profile}>
            <Image
              style={styles.profileimage}
              source={{
                uri: 'https://img.seadn.io/files/f10386a1d9330f9cc12879154e6457cd.png?fit=max&w=600',
              }}></Image>
            {/* <Text style={styles.txtavatar}>GB</Text> */}
          </View>

          <View style={styles.users_container}>
            <View style={styles.followers_container}>
              <Text style={styles.followers_count}>24.7k</Text>
              <Text style={styles.followers_txt}>Followers</Text>
            </View>

            <View style={styles.following_container}>
              <Text style={styles.following_count}>24</Text>
              <Text style={styles.following_txt}>Following</Text>
            </View>
          </View>

          {/* <View style={styles.editbiocontainer}>
            <Text
              style={styles.editbio}
              onPress={() => {
                navigation.navigate('bio');
              }}>
              Edit Bio
            </Text>
          </View> */}
        </View>

        <View style={styles.nameline}>
          {/* <Text style={styles.textname}>{MyProfileInfo.myprofile.name}</Text> */}
          <Text style={styles.textname}>Gaurav Burande</Text>
          <Text style={styles.profession}>Developer</Text>
          {/* <Text style={styles.textusername}>
            @{MyProfileInfo.myprofile.username}
          </Text> */}
        </View>

        {/* <View style={styles.followline}>
          <Text style={styles.friendstxt}>
            Friends {MyProfileInfo.myprofile.Friends.length}
          </Text>
        </View> */}

        <Text style={styles.biotext}>{MyProfileInfo.myprofile.bio}</Text>

        <View style={styles.profile_button_container}>
          <View style={styles.profile_button}>
            <Text style={styles.profile_button_txt}>Edit Profile</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar barStyle="dark-content"></StatusBar>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const P100 = '100%';
const P90 = '86%';
const styles = StyleSheet.create({
  container_main: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
  },

  profileheader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'flex-end',
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FFFF',
    // flex: 0.09,
    color: '#000000',
    height: 55,
  },
  username: {
    // padding: 5,
    // backgroundColor: '#FFFF',
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    // borderRadius: 25,
    paddingLeft: 20,
    fontSize: 17,
    // paddingRight: 20,
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
    // marginRight: 30,
    color: '#000000',
  },
  profileline: {
    // flex: 0.18,
    height: 120,
    // backgroundColor: '#808080',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  users_container: {
    paddingLeft: 20,
    // backgroundColor: '#FFFF',
  },
  followers_txt: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 15,
  },

  followers_container: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 19,
    height: 28,
    marginLeft: 15,

    display: 'flex',
  },

  followers_txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 15,
  },

  followers_count: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 18,
  },

  following_container: {
    justifyContent: 'center',
    height: 28,
    marginLeft: 20,
    alignItems: 'center',
    display: 'flex',
  },

  following_txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 15,
  },

  following_count: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 18,
  },

  profile: {
    width: 95,
    height: 95,
    borderRadius: 45,
    backgroundColor: '#F3EBE0',
    // backgroundColor: '#F65F65',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimage: {
    width: 95,
    height: 95,
    borderRadius: 55,
    zIndex: -1,
  },

  nameline: {
    // flex: 0.1,
    height: 50,
    justifyContent: 'center',
    // backgroundColor: '#FFFF',
  },
  editbio: {
    padding: 5,
    backgroundColor: '#FFFF',
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  editbiocontainer: {
    marginLeft: 50,
    marginTop: 80,
  },
  textname: {
    // marginLeft: 25,
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    // backgroundColor: '#F65F65',
    paddingLeft: 25,
    fontSize: 15,
    paddingRight: 40,
  },
  profession: {
    color: '#696969',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 25,
    fontSize: 14,
    paddingRight: 40,
  },
  biotext: {
    color: '#000000',
    paddingLeft: 25,
    paddingRight: 40,
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  textusername: {
    // marginLeft: 25,
    fontSize: 12,
    // paddingTop: 3,
    color: '#000000',
    // backgroundColor: '#F65F65',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 30,
    // width: 'auto',
  },
  followline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    // flex: 10,
    height: 50,
    // backgroundColor: '#FFFF',
  },

  users_container: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FFFF',
    marginLeft: 20,
  },
  friendstxt: {
    fontFamily: 'Poppins-BoldItalic',
    color: '#000000',
    // marginLeft: 2,
  },
  text3: {},
  text4: {
    // fontWeight: "700",
    marginLeft: 20,
  },
  bioline: {
    // backgroundColor: '#FFFF',
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
  profileheaderrighticon1ripple: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginRight: 20,
    borderRadius: 50,
  },
  addbio: {
    // backgroundColor: '#FFFF',
  },
  addbiotxt: {
    // backgroundColor: '#FFFF',
    fontFamily: 'Poppins-Light',
    color: '#3E3C9C',
    paddingLeft: 30,
    fontSize: 14,
  },
  txtavatar: {
    fontFamily: 'Poppins-Light',
    color: '#101010',
    fontSize: 45,
    letterSpacing: 2,
  },
  profile_button_container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: 10,
  },
  profile_button: {
    backgroundColor: '#F3EBE0',
    width: P90,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  profile_button_txt: {
    fontFamily: 'Poppins-Bold',
    color: '#101010',
    fontSize: 15,
    // letterSpacing: 2,
  },
});
