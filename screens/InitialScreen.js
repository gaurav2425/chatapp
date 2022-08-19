import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableRipple} from 'react-native-paper';

const InitialScreen = ({navigation}) => {
  return (
    <View style={styles.initialscreen}>
      <View style={styles.initialscreencontainer1}>
        <Image
          source={require('../assets/images/group14.png')}
          style={styles.mainlogo}></Image>
        <Image
          source={require('../assets/images/plaxbox1.png')}
          style={styles.maintext}></Image>
      </View>

      <View style={styles.initialscreencontainer2}>
        <TouchableRipple
          rippleColor="rgba(255, 255, 255, .2)"
          borderless
          style={styles.ripple}
          onPress={() => {
            navigation.replace('login');
          }}>
          <View style={styles.initialscreencontainer2view}>
            <Text style={styles.initialscreencontainer2viewtext}>
              Welcome to PlaxBox 🥂
            </Text>
            <Entypo name="chevron-right" size={23} style={styles.icon}></Entypo>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default InitialScreen;

const P10 = '15%';
const P40 = '60%';

const styles = StyleSheet.create({
  initialscreen: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainlogo: {
    width: 80,
    height: 80,
  },
  maintext: {
    width: 250,
    height: 200,
    marginTop: -50,
  },
  initialscreencontainer1: {
    // backgroundColor: '#F65F65',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: P40,
    alignSelf: 'center',
  },
  initialscreencontainer2: {
    // marginTop: 170,
    marginBottom: P10,
  },
  initialscreencontainer2view: {
    padding: 10,
    backgroundColor: '#F6421B',
    backgroundColor: '#ff4d4d',
    // backgroundColor: '#435CB5',
    // backgroundColor: '#16B108',
    borderRadius: 30,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ripple: {
    borderRadius: 30,
  },
  initialscreencontainer2viewtext: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#FFFF',
  },
  icon: {
    color: '#FFFF',
  },
});
