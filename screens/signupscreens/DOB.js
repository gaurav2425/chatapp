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
  KeyboardAvoi,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableRipple} from 'react-native-paper';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {TextInputMask} from 'react-native-masked-text';
import {SignupdobAction} from '../../actions/Signup';

const DOB = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [userexist, setUserexist] = useState('');
  const [validemail, setValidemail] = useState(false);

  const Mysignup = useSelector(state => state.SignupReducer);

  console.log(Mysignup);

  const dispatch = useDispatch();

  const Invalid = () => {
    showMessage({
      message: 'Invalid OTP',
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

  const valid = () => {
    showMessage({
      message: 'Valid OTP',
      type: 'info',
      color: '#FFFF',
      backgroundColor: '#02d946',
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

  const emailvalidation = () => {
    fetch('http://13.232.252.51:5000/api/totp-validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        // email: email,
        secret: Mysignup.secret,
        token: otp,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        console.log(data);
        if (data.valid === true) {
          navigation.replace('password');
          // valid();
        } else {
          console.log('Not Valid');
          // Invalid();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendCredentials = () => {
    fetch('http://13.232.252.51:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: Mysignup.name,
        email: Mysignup.email,
        password: Mysignup.password,
        username: Mysignup.username,
        dob: Mysignup.dob,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          await AsyncStorage.setItem('token', data.token);
          console.log(data);
          navigation.replace('home');
        } catch (e) {
          //saving error
          console.log('Error hai', e);
        }
      })
      .catch(err => {
        console.log(err);
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
            navigation.navigate('emailscreen');
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
            <Text style={styles.txthead}>give us your DOB</Text>
            <Text style={styles.txtheadsub}>
              additional information helps you to use multiple features
            </Text>

            {/* <Text>{Mysignup.secret}</Text> */}
          </View>

          <View style={styles.namecontainer}>
            <TextInputMask
              // refInput={ref => (myDateText = ref)}
              style={styles.otptextinput}
              placeholder="DD/MM/YYYY"
              type={'datetime'}
              value={dob}
              options={{
                format: 'DD/MM/YYYY',
              }}
              onChangeText={text => setDob(text)}
            />
          </View>

          {dob.length < 6 ? (
            <TouchableRipple
              style={styles.btn1}
              // disabled={true}
              rippleColor="rgba(255, 255, 255, .4)"
              onPress={() => {
                // dismissKeyboard(), sendCredentials();
                console.log('clicked');
                // Invalid();
              }}>
              <View>
                <Text style={styles.btntxt}>Finish!</Text>
              </View>
            </TouchableRipple>
          ) : (
            <TouchableRipple
              style={styles.btn3}
              // disabled={true}
              rippleColor="rgba(255, 255, 255, .4)"
              onPress={() => {
                // dismissKeyboard(), sendCredentials();

                console.log('clicked');
                dispatch(
                  SignupdobAction({
                    mydob: dob,
                  }),
                );

                sendCredentials();

                // emailvalidation();
              }}>
              <View>
                <Text style={styles.btntxt}>Finish!</Text>
              </View>
            </TouchableRipple>
          )}

          {/* <Text
            onPress={() => {
              dispatch(
                SignupdobAction({
                  mydob: dob,
                }),
              );
            }}>
            SAVE
          </Text> */}
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

export default DOB;

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
    marginLeft: 15,
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
    marginTop: 15,
    // padding: 20,
  },
  otptextinput: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    // marginTop: 20,
    fontFamily: 'Poppins-Medium',
    // borderBottomWidth: 1,
    fontSize: 25,
    // borderColor: '#D9D3D3',
    // padding: 35,
    height: 70,
    // backgroundColor: '#D9D3D3',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 40,
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
    marginTop: 40,
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

  otpreceivetxt: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  otpresendtxt: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    borderBottomWidth: 1,
    color: '#000000',
    borderBottomColor: '#696969',
    borderStyle: 'dashed',
  },
  svgcontainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignSelf: 'baseline',
  },
  otpsendcontainer: {
    width: P90,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: '#FFFF',
    alignItems: 'center',
    marginTop: 10,
  },
});
