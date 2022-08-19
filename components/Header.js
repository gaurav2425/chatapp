import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import {AntDesign} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Story from './Story';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headercontainer}>
      {/* <Image
        style={styles.profileimage}
        source={require('../assets/images/PLAX3.png')}></Image> */}
      <View style={styles.headercontainer1}>
        <Text style={styles.txt}>Plaxbox</Text>
        {/* <TouchableRipple
          onPress={() => navigation.navigate('explore')}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          // style={{marginLeft: 25}}
          style={styles.rippleexplore}>
          <AntDesign
            name="find"
            size={27}
            style={styles.exploreicon}></AntDesign>
        </TouchableRipple> */}

        {/* <Image
          style={styles.profileimage}
          source={require('../assets/images/plax1.png')}></Image> */}

        <View style={styles.righticons}>
          {/* <SimpleLineIcons
        name="compass"
        size={27}
        style={styles.exploreicon}></SimpleLineIcons> */}
          {/* <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profilecontainerripple}>
            <Image
              source={require('../assets/images/clubs.png')}
              style={styles.clubiconimage}></Image>
          </TouchableRipple> */}

          {/* <TouchableRipple
            onPress={() => navigation.navigate('FriendRequests')}
           
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profilecontainerripple1}>
            <Ionicons
              name="create-outline"
              size={27}
              style={styles.addfriendicon}></Ionicons>
          </TouchableRipple> */}

          <View style={styles.notificationcontainer}>
            <TouchableRipple
              onPress={() => navigation.navigate('notification')}
              rippleColor="rgba(0, 0, 0, .1)"
              borderless
              style={styles.profilecontainerripple}>
              <FontAwesome
                name="bell-o"
                size={25}
                style={styles.bellicon}></FontAwesome>
            </TouchableRipple>
            <View style={styles.notificationno}>
              <View style={styles.notificationnosub}>
                <Text style={styles.notificationnotxt}>2</Text>
              </View>
            </View>
          </View>

          <View>
            <TouchableRipple
              onPress={() => navigation.navigate('notification')}
              rippleColor="rgba(0, 0, 0, .1)"
              borderless
              style={styles.aeroplaneiconripple}>
              <Ionicons
                name="ios-paper-plane-outline"
                size={26}
                style={styles.aeroplaneicon}></Ionicons>
            </TouchableRipple>

            <View style={styles.directmessageno}>
              <View style={styles.directmessagenosub}>
                <Text style={styles.directmessagenotxt}>2</Text>
              </View>
            </View>
          </View>

          {/* <AntDesign name="plus" size={25}></AntDesign> */}

          {/* <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profilecontainerripple}>
            <View style={styles.profilecontainer}>
              <Image
                source={require('../assets/images/punk8033.png')}
                style={styles.image}></Image>
              <Text style={styles.txtavatar}>GB</Text>
            </View>
          </TouchableRipple> */}

          {/* <Icon name="plus" size={27} style={styles.icon}></Icon> */}
        </View>
      </View>

      {/* <View>
        <View>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            style={{
              borderRadius: 50,
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            borderless>
            <Story></Story>
          </TouchableRipple>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',

              display: 'flex',
              flexDirection: 'column',
            }}>
            <Text style={styles.txttop}>Kaushik</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default Header;
const P100 = '100%';

const styles = StyleSheet.create({
  headercontainer: {
    backgroundColor: '#FAF5EF',
    // flex: 0.3,
    width: P100,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#FAF5EF',
    borderBottomWidth: 1,
  },
  headercontainer1: {
    backgroundColor: '#FAF5EF',
    width: P100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#F3EFEA',
    // borderBottomWidth: 1,
    height: 60,
  },
  icon: {
    color: '#000000',
    marginRight: 20,
  },
  txt: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 18,
    marginLeft: 20,
  },
  exploreicon: {
    color: '#000000',
    fontWeight: 'bold',
    // marginRight: 20,
  },
  addfriendicon: {
    // color: '#ff4d4d',
    color: '#000000',
    fontWeight: 'bold',
  },
  bellicon: {
    color: '#000000',
    // marginRight: 20,
  },
  aeroplaneicon: {
    color: '#000000',
    // marginRight: 10,
  },
  clubiconimage: {
    width: 25,
    height: 25,
    // marginRight: 20,
  },
  righticons: {
    display: 'flex',
    flexDirection: 'row',
  },
  profilecontainer: {
    width: 32,
    height: 32,
    backgroundColor: '#F3EBE0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#696969',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  profilecontainerripple: {
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginRight: 4,
    padding: 3,
    borderRadius: 15,
    marginRight: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  notificationcontainer: {
    paddingTop: 4,
  },
  profilecontainerripple1: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    // marginRight: 4,
    // padding: 3,
    borderRadius: 20,
    marginRight: 10,
    paddingRight: 7,

    paddingLeft: 7,
  },
  aeroplaneiconripple: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    // marginRight: 4,
    // padding: 3,
    borderRadius: 30,
    marginRight: 10,
    padding: 7,

    // paddingLeft: 7,
  },
  rippleexplore: {
    padding: 10,
    marginLeft: 10,
    borderRadius: 25,
  },
  txtavatar: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 14,
  },
  profileimage: {
    width: 100,
    height: 100,
    // marginBottom: 100,
    // backgroundColor: '#FFFF',
    // marginRight: -50,
    marginLeft: 20,
  },

  directmessageno: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    left: 17,
    top: 5,
  },
  notificationno: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    left: 17,
    top: 5,
  },
  directmessagenosub: {
    width: 13,
    height: 13,
    backgroundColor: '#ff4d4d',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationnosub: {
    width: 13,
    height: 13,
    backgroundColor: '#ff4d4d',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directmessagenotxt: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFF',
    fontSize: 9,
  },

  notificationnotxt: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFF',
    fontSize: 9,
  },
});
