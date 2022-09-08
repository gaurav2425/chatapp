import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header_container}>
      <View style={styles.header_container_left}>
        {/* <AntDesign name="find" size={26} style={styles.exploreicon}></AntDesign> */}
        <Text style={styles.logotxt}>PlaxBox</Text>
      </View>
      <View style={styles.header_right}>
        {/* <AntDesign
          name="search1"
          size={26}
          style={styles.searchicon}></AntDesign> */}

        <TouchableRipple
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          onPress={() => {
            navigation.navigate('notification');
          }}
          style={styles.belliconripple}>
          <FontAwesome
            name="bell-o"
            size={24}
            style={styles.bellicon}></FontAwesome>
        </TouchableRipple>

        <TouchableRipple
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          onPress={() => {
            navigation.navigate('notification');
          }}
          style={styles.belliconripple}>
          <MaterialCommunityIcons
            name="cards-club"
            size={28}
            style={styles.bellicon}></MaterialCommunityIcons>
        </TouchableRipple>

        <View>
          <TouchableRipple
            onPress={() => navigation.navigate('notification')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.aeroplaneiconripple}>
            <Ionicons
              name="ios-paper-plane-outline"
              size={27}
              style={styles.aeroplaneicon}></Ionicons>
          </TouchableRipple>

          <View style={styles.directmessageno}>
            <View style={styles.directmessagenosub}>
              <Text style={styles.directmessagenotxt}>2</Text>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity
          style={styles.profile_container}
          onPress={() => {
            navigation.navigate('profile');
          }}>
          <Image
            source={require('../assets/image/profile.png')}
            style={styles.profile_image}></Image>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Header1;
const P100 = '100%';

const styles = StyleSheet.create({
  profile_container: {
    width: 30,
    height: 30,
    backgroundColor: '#F65F65',
    marginRight: 10,
    borderRadius: 10,
  },
  profile_image: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  header_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
    borderBottomColor: '#F4F4D9',
    borderBottomWidth: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: P100,
    paddingBottom: 5,
  },
  header_right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellicon: {
    color: '#000000',
  },
  belliconripple: {
    marginRight: 5,
    padding: 8,
    borderRadius: 50,
  },
  searchicon: {
    marginRight: 20,
    color: '#000000',
  },
  exploreicon: {
    marginLeft: 5,
    color: '#000000',
  },
  logotxt: {
    fontFamily: 'Poppins-Bold',
    marginLeft: 10,
    fontSize: 20,
    color: '#000000',
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
  aeroplaneicon: {
    color: '#000000',
    // marginRight: 10,
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
  directmessagenosub: {
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
});
