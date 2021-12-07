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
      <View style={styles.headercontainer1}>
        {/* <Text style={styles.txt}>SpanCock</Text> */}
        <TouchableRipple
          onPress={() => navigation.navigate('explore')}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          style={{marginLeft: 25}}
          // style={styles.profilecontainerripple}
        >
          <AntDesign
            name="find"
            size={27}
            style={styles.exploreicon}></AntDesign>
        </TouchableRipple>
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

          <TouchableRipple
            onPress={() => navigation.navigate('FriendRequests')}
            // onPress={() => navigation.navigate('ChatScreen')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profilecontainerripple}>
            <Ionicons
              name="person-add"
              size={24}
              style={styles.addfriendicon}></Ionicons>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profilecontainerripple}>
            <FontAwesome
              name="bell-o"
              size={27}
              style={styles.bellicon}></FontAwesome>
          </TouchableRipple>

          {/* <AntDesign name="plus" size={25}></AntDesign> */}

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profilecontainerripple}>
            <View style={styles.profilecontainer}>
              <Image
                source={require('../assets/images/punk8033.png')}
                style={styles.image}></Image>
            </View>
          </TouchableRipple>

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
    color: '#322F2F',
    fontSize: 18,
    marginLeft: 20,
  },
  exploreicon: {
    color: '#000000',
    fontWeight: 'bold',
    // marginRight: 20,
  },
  addfriendicon: {
    color: '#000000',
    fontWeight: 'bold',
  },
  bellicon: {
    color: '#000000',
    // marginRight: 20,
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
    width: 30,
    height: 30,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  profilecontainerripple: {
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginRight: 4,
    padding: 5,
    borderRadius: 30,
    paddingRight: 8,
    paddingLeft: 8,
  },
});
