import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableRipple} from 'react-native-paper';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import {useSelector, useDispatch} from 'react-redux';

import {SignupnameAction, SignupsecretAction} from '../../actions/Signup';

const Name = ({navigation}) => {
  const Mysignup = useSelector(state => state.SignupReducer);

  console.log(Mysignup);

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  // const [users, setUsers] = useState([]);
  const [validemail, setValidemail] = useState(false);

  const dispatch = useDispatch();

  const showvalidity = () => {
    showMessage({
      message: 'Email Address already Taken',
      type: 'info',
      color: '#FFFF',
      backgroundColor: '#ff4d4d',
      // hideStatusBar: true,
      floating: true,
      style: {
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textStyle: {
        color: '#000000',

        fontFamily: 'Poppins-Medium',
      },
      titleStyle: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
      },
    });
  };

  return (
    <View style={styles.signupcontainermain}>
      <View style={styles.header}>
        <TouchableRipple
          rippleColor="rgba(60, 60, 60, .2)"
          borderless
          style={styles.ripple}
          onPress={() => {
            // navigation.replace('login');
            console.log('pressed');
          }}>
          <Ionicons
            name="chevron-back"
            size={35}
            style={styles.backicon}></Ionicons>
        </TouchableRipple>
      </View>
      <View style={styles.signupcontainer}>
        <View style={styles.fieldscontainer}>
          <View style={styles.txtcontainer}>
            <Text style={styles.txthead}>Enter your Name</Text>
            <Text style={styles.txtheadsub}>
              Words have meaning and names have power ...
            </Text>
          </View>

          <View style={styles.namecontainer}>
            <TextInput
              placeholder="Name"
              style={styles.name}
              value={name}
              autoCapitalize="none"
              // textContentType=""
              onChangeText={text => setName(text)}></TextInput>
          </View>

          {name.length == 0 ? (
            <TouchableRipple
              style={styles.btn1}
              // disabled={true}
              rippleColor="rgba(255, 255, 255, .4)"
              onPress={() => {
                // dismissKeyboard(), sendCredentials();
                showMessage({
                  message: 'Please enter your name',
                  type: 'info',
                  color: '#FFFF',
                  backgroundColor: '#ff4d4d',
                  // hideStatusBar: true,
                  floating: true,
                  style: {
                    height: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  textStyle: {
                    color: '#000000',

                    fontFamily: 'Poppins-Medium',
                  },
                  titleStyle: {
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                  },
                });
              }}>
              <View>
                <Text style={styles.btntxt}>Next</Text>
              </View>
            </TouchableRipple>
          ) : (
            <TouchableRipple
              // style={styles.btn}
              style={styles.btn}
              rippleColor="rgba(255, 255, 255, .4)"
              onPress={() => {
                console.log('Clicked');
                navigation.navigate('dob');

                dispatch(
                  SignupnameAction({
                    myname: name,
                  }),
                );
              }}>
              <View>
                <Text style={styles.btntxt}>Next</Text>
              </View>
            </TouchableRipple>
          )}
        </View>
        <View style={styles.svgcontainer}>
          {/* <Image
            style={styles.svgimage}
            source={require('../../assets/images/svg5.png')}></Image> */}
        </View>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF5EF"></StatusBar>
      <FlashMessage position="bottom" />
    </View>
  );
};

export default Name;

const P100 = '100%';
const P90 = '85%';
const P80 = '80%';

const styles = StyleSheet.create({
  signupcontainermain: {
    flex: 1,
    // backgroundColor: '#F65F65',
  },
  signupcontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    justifyContent: 'space-between',
  },
  header: {
    height: 70,
    justifyContent: 'center',
    width: P100,
    backgroundColor: '#FAF5EF',
  },
  ripple: {
    width: 40,
    marginLeft: 10,
    backgroundColor: '#FAF5EF',
    borderRadius: 50,
    // padding: 10,
  },
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-BlackItalic',
    // textAlign: 'center',
    // marginLeft: 10,
  },
  txtcontainer: {
    width: P90,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFFF',
    alignSelf: 'center',
  },
  txtlogo: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Poppins-BlackItalic',
    textAlign: 'center',
    // paddingTop: 30,
  },
  email: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    // paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    borderColor: '#D9D3D3',
  },
  namecontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFFF',
  },
  name: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 20,
    // borderRadius: 10,
    // fontSize: 10,
    // paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    borderColor: '#D9D3D3',
  },
  checkicon: {
    bottom: 5,
    alignSelf: 'flex-start',
    color: '#11B902',
    position: 'absolute',
    right: 30,
  },
  checkicon1: {
    bottom: 5,
    alignSelf: 'flex-start',
    color: '#FF0000',
    position: 'absolute',
    right: 30,
  },

  password: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    // paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: '#D9D3D3',
  },
  fieldscontainer: {
    // paddingTop: 80,
    marginTop: 50,
    // backgroundColor: '#FFFF',
  },
  btncontainer: {
    width: P90,
    // alignSelf: 'center',
    // paddingTop: 10,
  },
  btn: {
    height: 50,
    width: P90,
    // backgroundColor: '#12BF0E',
    // backgroundColor: '#F6421B',
    backgroundColor: '#ff4d4d',
    alignSelf: 'center',
    borderRadius: 30,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  backicon: {
    color: '#000000',
  },

  btn1: {
    height: 50,
    width: P90,
    // backgroundColor: '#12BF0E',
    backgroundColor: '#ff4d4d',
    alignSelf: 'center',
    borderRadius: 30,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    opacity: 0.3,
  },
  btn3: {
    height: 50,
    width: P90,
    // backgroundColor: '#12BF0E',
    // backgroundColor: '#F6421B',
    backgroundColor: '#ff4d4d',
    alignSelf: 'center',
    borderRadius: 30,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    // opacity: 0.3,
  },

  btnblank: {
    height: 50,
    width: P90,
    backgroundColor: '#12BF0E',
    backgroundColor: '#F6421B',
    alignSelf: 'center',
    borderRadius: 30,
    // alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.3,
  },
  btntxt: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  txt2: {
    color: '#000000',
    // width: P90,
    alignSelf: 'center',
    // paddingTop: 10,
    // marginLeft: 10,
    fontFamily: 'Poppins-Medium',
  },
  txt2Register: {
    fontFamily: 'Poppins-Bold',
    // backgroundColor: '#FFFF',
    // paddingTop: 10,
    marginLeft: 5,
    color: '#000000',
  },
  txt2container: {
    // backgroundColor: '#F65F65',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 30,
  },
  txthead: {
    color: '#000000',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
  },
  txtheadsub: {
    color: '#555555',
    fontSize: 12,
    width: 200,
    fontFamily: 'Poppins-Medium',
  },
  btnmaincontainer: {
    marginTop: 20,
  },
  imagelogo: {
    width: 150,
    height: 150,
  },
  svgimage: {
    width: 200,
    height: 100,
    bottom: 0,
    right: 0,
  },
  svgcontainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
