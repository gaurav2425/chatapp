import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  NavigationAction,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {NavigationAction, StackActions} from 'react-navigation';
import {NavigationActions} from 'react-navigation';

const Settings = ({navigation: {goBack}, navigation}) => {
  // const navigation1 = useNavigation();

  const LogOut = () => {
    AsyncStorage.removeItem('token').then(() => {
      // navigation.replace('login');
      // const resetAction = StackActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({routeName: 'login'})],
      //   // key: null,
      // });

      // navigation.dispatch(resetAction);
      // params: {YOUR_OPTIONAL_DATA}
      const resetAction = CommonActions.reset({
        index: 1,
        routes: [{name: 'login'}],
      });
      navigation.dispatch(resetAction);
    });
  };

  return (
    <View style={styles.settings}>
      <View style={styles.notificationheader}>
        <TouchableRipple
          onPress={() => {
            goBack();
          }}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          // style={{marginLeft: 25}}

          style={styles.backripple}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            style={styles.icon1}></Ionicons>
        </TouchableRipple>
        <Text style={styles.nametxt}>Settings</Text>
      </View>
      <View style={styles.settingbarlogout}>
        <TouchableOpacity
          style={styles.settingbarlogout1}
          onPress={() => LogOut()}>
          <Text style={styles.settingbarlogout1txt}>Logout</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="#FAF5EF" barStyle="dark-content" />
    </View>
  );
};

export default Settings;
const P90 = '90%';

const styles = StyleSheet.create({
  settings: {
    // marginTop: statusbarHeight,
    flex: 1,
    backgroundColor: '#FAF5EF',
  },
  notificationheader: {
    // flex: 0.07,
    height: 50,
    // backgroundColor: '#F65F65',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
  icon1: {
    color: '#000000',
  },
  backicon: {
    fontSize: 30,
    position: 'absolute',
    flexDirection: 'row',
    display: 'flex',
    fontWeight: '400',
    color: '#000000',
  },
  backripple: {
    fontSize: 30,
    left: 10,
    position: 'absolute',
    flexDirection: 'row',
    display: 'flex',
    fontWeight: '400',
    color: '#000000',
    // marginLeft: 10,
    padding: 10,
    borderRadius: 30,
  },
  nametxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#000000',
  },
  notificationbody: {
    // flex: 0.9,
  },
  notificationloadercontainer: {
    // backgroundColor: '#FFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingbarlogout1: {
    width: P90,
    backgroundColor: '#FFFF',
    height: 40,
    borderRadius: 5,
    color: '#000000',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#B9B7B7',
    borderWidth: 0.3,
    marginTop: 30,
  },
  settingbarlogout1txt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FF0101',
  },
});
