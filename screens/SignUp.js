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
  ScrollView,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Username from './Username';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from '../actions/index';
import {UserData, UserPassword} from '../actions/Useraction';
import UserReducer from '../reducers/User';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableRipple} from 'react-native-paper';
import {
  SignupUsernameAction,
  // MyProfileBioAction,
} from '../actions/Signup';

const SignUp = ({navigation}) => {
  const Mysignup = useSelector(state => state.SignupReducer);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingUsername, setLoadingUsername] = useState(true);
  const [validusername, setValidusername] = useState();
  const [step, setStep] = useState(0);
  const [userExist, setUserExist] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const userdata = useSelector(state => state);
  console.log(userdata);

  const myState = useSelector(state => state.changeTheNumber);
  const myemail = useSelector(state => state.UserReducer);
  // const mypassword = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();

  // const handleStep = () => {
  //   setStep(step + 1);
  // };

  // const handleReduxData = () => {
  //   setStep(step + 1);
  //   dispatch(
  //     UserData({
  //       name: name,
  //       email: email,
  //       password: password,
  //     }),
  //   );
  // };

  const Invalid = () => {
    showMessage({
      message:
        'Usernames can only use letters, numbers, underscores and periods',
      type: 'info',
      color: '#FFFF',
      backgroundColor: '#ff4d4d',
      // hideStatusBar: true,
      floating: true,
      style: {
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textStyle: {
        color: '#000000',

        fontFamily: 'Poppins-Medium',
      },
      titleStyle: {
        fontSize: 11,
        fontFamily: 'Poppins-Medium',
      },
    });
  };

  const validate = text => {
    console.log(text);
    let reg = /^[a-z0-9._]+$/;
    console.log(reg.test(text));
    if (reg.test(text) === false) {
      console.log('Username is Not Correct');
      console.log('Username is Not Correct');
      console.log('Username is Not Correct');
      console.log('Username is Not Correct');
      console.log('Username is Not Correct');
      console.log('Username is Not Correct');
      Invalid();
      // showvalidemailmsg();

      setValidusername(false);
      // setEmail({email: text});
      return false;
    } else {
      // setEmail({email: text});
      setValidusername(true);
      console.log('Username is Correct');
      console.log('Username is Correct');
      console.log('Username is Correct');
      console.log('Username is Correct');
      console.log('Username is Correct');
      console.log('Username is Correct');
    }
  };

  const sendCredentials = () => {
    const fetchMYAPI = async () => {
      fetch('http://13.232.252.51:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          username: username,
        }),
      })
        .then(res => res.json())
        .then(async data => {
          // console.log(data);

          try {
            await AsyncStorage.setItem('token', data.token);
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
    fetchMYAPI();
  };
  console.log(myemail);
  // console.log(myemail.email);
  // console.log(myemail.name);
  // console.log(myemail.password);

  const getUsername = () => {
    fetch('http://13.232.252.51:5000/api/users/getusername', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        console.log(data);
        setUsers(data);
        setLoadingUsername(false);
        // dispatch(
        //   SignupAction({
        //     username: username,
        //   }),
        // );
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsername();
  }, []);

  useEffect(() => {
    getUsername();
  }, [username]);

  console.log('All Users');
  // console.log(username);
  console.log(username);
  console.log(users);
  console.log('All Users');

  // useEffect(() => {
  //   users.filter(user => {
  //     if (user.username.toLowerCase() == username) {
  //       setUserExist(true);
  //       console.log('User Existed');
  //     } else if (user.username.toLowerCase() != username) {
  //       setUserExist(false);
  //       console.log('User Not Existed');
  //     }
  //   });
  // }, [username]);

  console.log(userExist);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.signupcontainermain}>
      <View style={styles.signupcontainer}>
        <View style={styles.fieldscontainer}>
          {/* <View>
            <Image
              source={require('../assets/images/plax1.png')}
              style={styles.imagelogo}></Image>
          </View> */}

          <View style={styles.initialscreencontainer1}>
            <Image
              source={require('../assets/images/group14.png')}
              style={styles.mainlogo}></Image>
            {/* <Image
              source={require('../assets/images/plaxbox1.png')}
              style={styles.maintext}></Image> */}
          </View>

          <View style={styles.txtcontainer}>
            <Text style={styles.txthead}>Choose a Username</Text>
            <Text style={styles.txtsub}>You can change it later</Text>
          </View>
          {/* <TextInput
            placeholder="Name"
            style={styles.name}
            value={name}
            autoCapitalize="none"
            textContentType="name"
            onChangeText={text => setName(text)}></TextInput> */}

          <View style={styles.namecontainer}>
            <TextInput
              placeholder="Username"
              style={styles.name}
              value={username}
              autoCapitalize="none"
              textContentType="username"
              // onChangeText={
              //   (text => setUsername(text))
              // }
              onChangeText={text => (
                setUsername(text), validate(text)
              )}></TextInput>

            {/* <AntDesign
              name="checkcircle"
              size={25}
              style={styles.checkicon}></AntDesign> */}

            {username.length == 0 ? null : users ? (
              <>
                {loadingUsername === true ? (
                  <Ionicons
                    name="alert"
                    size={24}
                    style={styles.checkicon1}></Ionicons>
                ) : (
                  <Ionicons
                    name="ios-close-circle-outline"
                    size={24}
                    style={styles.checkicon1}></Ionicons>
                )}
              </>
            ) : (
              <>
                {validusername === false ? (
                  <Ionicons
                    name="ios-close-circle-outline"
                    size={24}
                    style={styles.checkicon1}></Ionicons>
                ) : (
                  <Ionicons
                    name="ios-checkmark-circle-outline"
                    size={24}
                    style={styles.checkicon}></Ionicons>
                )}
              </>
            )}
          </View>

          {/* <TextInput
            placeholder="Email"
            style={styles.email}
            value={email}
            autoCapitalize="none"
            textContentType="emailAddress"
            onChangeText={text => setEmail(text)}></TextInput> */}

          {/* <TextInput
            placeholder="Password"
            style={styles.password}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}></TextInput> */}

          {/* {username.length == 0 ? (
            <Text>Blank</Text>
          ) : users ? (
            <Text>User Exist</Text>
          ) : (
            <Text>User Not Exist</Text>
          )} */}

          {username.length == 0 ? (
            // <TouchableOpacity
            //   style={styles.btnmaincontainer}
            //   disabled={true}
            //   onPress={() => {
            //     getUsername();
            //   }}>
            //   <LinearGradient
            //     style={styles.btnblank}
            //     colors={['#8a3ab9', '#e95950', '#fccc63']}
            //     start={{x: 0, y: 0}}
            //     end={{x: 1, y: 0}}>
            //     <Text style={styles.btntxt}>Next</Text>
            //   </LinearGradient>
            // </TouchableOpacity>

            <TouchableRipple
              style={styles.btn1}
              disabled={true}
              rippleColor="rgba(255, 255, 255, .4)"
              onPress={() => {
                dismissKeyboard(), sendCredentials();
              }}>
              <View>
                <Text style={styles.btntxt}>Next</Text>
              </View>
            </TouchableRipple>
          ) : users ? (
            // <TouchableOpacity
            //   style={styles.btnmaincontainer}
            //   disabled={true}
            //   onPress={() => {
            //     getUsername();
            //   }}>
            //   <LinearGradient
            //     style={styles.btn}
            //     colors={['#8a3ab9', '#e95950', '#fccc63']}
            //     start={{x: 0, y: 0}}
            //     end={{x: 1, y: 0}}>
            //     <Text style={styles.btntxt}>Next</Text>
            //   </LinearGradient>
            // </TouchableOpacity>
            <TouchableRipple
              style={styles.btn3}
              disabled={true}
              rippleColor="rgba(255, 255, 255, .4)"
              onPress={() => {
                dismissKeyboard(), sendCredentials();
              }}>
              <View>
                <Text style={styles.btntxt}>Next</Text>
              </View>
            </TouchableRipple>
          ) : (
            // <TouchableOpacity
            //   style={styles.btnmaincontainer}
            //   onPress={() => {
            //     getUsername();
            //   }}>
            //   <LinearGradient
            //     style={styles.btn}
            //     colors={['#8a3ab9', '#e95950', '#fccc63']}
            //     start={{x: 0, y: 0}}
            //     end={{x: 1, y: 0}}>
            //     <Text style={styles.btntxt}>Next</Text>
            //   </LinearGradient>
            // </TouchableOpacity>

            <TouchableRipple
              // style={styles.btn}
              style={styles.btn}
              rippleColor="rgba(255, 255, 255, .4)"
              onPress={() => {
                console.log('Clicked');

                dispatch(
                  SignupUsernameAction({
                    myusername: username,
                  }),
                );
                navigation.navigate('emailscreen');
              }}>
              <View>
                <Text style={styles.btntxt}>Next</Text>
              </View>
            </TouchableRipple>
          )}

          <View style={styles.txt2container}>
            <Text style={styles.txt2}>Already have an Account ?</Text>
            <Text
              style={styles.txt2Register}
              onPress={() => navigation.replace('login')}>
              Login
            </Text>
          </View>
        </View>

        {isKeyboardVisible === true ? null : (
          <View style={styles.svgcontainer}>
            <Image
              style={styles.svgimage}
              source={require('../assets/images/svg3.png')}></Image>
          </View>
        )}
      </View>
      <FlashMessage position="bottom" />
    </View>
  );
};

export default SignUp;

const P90 = '85%';
const P80 = '80%';
const P40 = '40%';

const styles = StyleSheet.create({
  signupcontainermain: {
    flex: 1,
    backgroundColor: '#F65F65',
  },
  signupcontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    // justifyContent: 'center',
    justifyContent: 'space-between',
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
    marginTop: 20,
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
    paddingTop: 60,
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
    backgroundColor: '#ff4d4d',
    // backgroundColor: '#F6421B',
    alignSelf: 'center',
    borderRadius: 30,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  btn1: {
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
    opacity: 0.3,
  },

  btnblank: {
    height: 50,
    width: P90,
    // backgroundColor: '#12BF0E',
    backgroundColor: '#ff4d4d',
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
    // paddingBottom: 30,
    marginTop: 25,
  },
  txthead: {
    color: '#000000',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
  },
  txtsub: {
    color: '#696969',
    fontSize: 13,
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
    height: 110,
  },
  svgcontainer: {
    // position: 'relative',
    bottom: 0,
    left: 5,
    Top: 150,
  },
  mainlogo: {
    width: 55,
    height: 55,
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
    // marginTop: P40,
    alignSelf: 'center',
  },
});
