import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {setEmail} from '../actions/index';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification, {Importance} from 'react-native-push-notification';
import {UserData, UserPassword, LoginAction} from '../actions/Useraction';
// import {useSelector, useDispatch} from 'react-redux';
import {TouchableRipple} from 'react-native-paper';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const myLoginState = useSelector(state => state.LoginReducer);

  // const mypassword = useSelector(state => state.UserReducer);

  // const myState = useSelector(state => state.Login);
  // const dispatch = useDispatch();
  const userdata = useSelector(state => state);
  console.log(userdata);
  console.log(myLoginState);
  const dispatch = useDispatch();

  const handleLoginReduxData = () => {
    // setStep(step + 1);
    dispatch(
      LoginAction({
        data,
      }),
    );
  };

  const Invalid = () => {
    showMessage({
      message: 'Please Fill all the fields',
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
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
      },
    });
  };

  const Invalid1 = () => {
    // showMessage({
    //   message: 'Invalid Credentials',
    //   type: 'info',
    //   color: '#FFFF',
    //   backgroundColor: '#ff4d4d',
    //   floating: true,
    //   style: {
    //     height: 60,
    //     borderRadius: 20,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   textStyle: {
    //     color: '#000000',

    //     fontFamily: 'Poppins-Medium',
    //   },
    //   titleStyle: {
    //     fontSize: 14,
    //     fontFamily: 'Poppins-Medium',
    //   },
    // });
    setModalVisible(true);
  };
  // const createChannel = () => {
  //   PushNotification.createChannel(
  //     {
  //       channelId: '333', // (required)
  //       channelName: 'My channel', // (required)
  //       channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
  //       playSound: true, // (optional) default: true
  //       soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
  //       importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
  //       vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  //       color: 'red',
  //     },
  //     created => console.log(`createChannel returned '${created}'`), //
  //   );
  // };

  // useEffect(() => {
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function (token) {
  //       console.log('TOKEN:', token);
  //     },

  //     // (required) Called when a remote is received or opened, or local notification is opened
  //     onNotification: function (notification) {
  //       console.log('NOTIFICATION:', notification);

  //       // process the notification

  //       // (required) Called when a remote is received or opened, or local notification is opened
  //       // notification.finish(PushNotificationIOS.FetchResult.NoData);
  //     },

  //     // IOS ONLY (optional): default: all - Permissions to register.
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },
  //     popInitialNotification: true,
  //     requestPermissions: true,
  //   });
  //   createChannel();
  // }, []);

  // const Test = () => {
  //   PushNotification.localNotification({
  //     channelId: '333',
  //     title: 'Slack', // (optional)
  //     ticker: 'My Notification Ticker',
  //     message: 'Ye kaam kar de pehle', // (required)
  //     picture: 'http://assets.stickpng.com/images/5cb480b85f1b6d3fbadece78.png', // (optional)
  //     // backgroundColor: '#F65F65',
  //     // playSound: true, // (optional) default: true
  //     // soundName: 'default',
  //     // playSound: true,
  //     // // actions: ['Yes', 'No'],
  //     // group: 'group',
  //     // bigLargeIcon: 'ic_launcher',
  //     // bigText:
  //     //   'My big text that will be shown when notification is expanded. Styling can be done using HTML tags(see android docs for details)', // (optional) default: "message" prop
  //     // subText: 'This is a subText',
  //     // reply_button_text: 'Reply',
  //     ticker: 'My Notification Ticker', // (optional)
  //     showWhen: true, // (optional) default: true
  //     autoCancel: true, // (optional) default: true
  //     largeIcon: 'ic_launcher', // (optional) default: "ic_launcher". Use "" for no large icon.
  //     largeIconUrl:
  //       'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png', // (optional) default: undefined
  //     smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
  //     bigText:
  //       'My big text that will be shown when notification is expanded. Styling can be done using HTML tags(see android docs for details)', // (optional) default: "message" prop
  //     subText: 'Slack is doing Great', // (optional) default: none
  //     bigPictureUrl:
  //       'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png', // (optional) default: undefined
  //     bigLargeIcon: 'ic_launcher', // (optional) default: undefined
  //     bigLargeIconUrl:
  //       'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png', // (optional) default: undefined
  //     color: 'red', // (optional) default: system default
  //     vibrate: true, // (optional) default: true
  //     vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
  //     tag: 'some_tag', // (optional) add tag to message
  //     actions: ['ReplyInput'],
  //     reply_placeholder_text: 'Reply', // (required)
  //     reply_button_text: 'Reply',
  //     // group: 'group',
  //     // (optional) add group to message
  //     // groupSummary: true,
  //     // (optional) set this notification to be the group summary for a group of notifications, default: false
  //     ongoing: false, // (optional) set whether this is an "ongoing" notification
  //     priority: 'high', // (optional) set notification priority, default: high
  //     visibility: 'private', // (optional) set notification visibility, default: private
  //     ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
  //     shortcutId: 'shortcut-id', // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
  //     onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false

  //     when: null, // (optional) Add a timestamp (Unix timestamp value in milliseconds) pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
  //     usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
  //     timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

  //     messageId: 'google:message_id', // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module.

  //     // actions: ['Okay', 'Reply'],
  //     // (Android only) See the doc for notification actions to know more
  //     invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
  //     reply_placeholder_text: 'Reply', // (required)
  //     reply_button_text: 'Reply', // (required)
  //     userInfo: 'Gaurav',
  //   });
  // };

  const pushschedule = () => {
    PushNotification.localNotificationSchedule({
      channelId: '333',
      message: 'My Notification Message', // (required)
      date: new Date(Date.now()),
      actions: ['ReplyInput'],
      reply_placeholder_text: 'Reply', // (required)
      reply_button_text: 'Reply', // (required)
      color: 'red',
    });
  };

  console.log(
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    }),
  );
  const showAlert = e =>
    Alert.alert(
      'Invalid Credientials',
      'Please fill all the fields',
      [
        {
          text: 'ok',

          style: 'ok',
        },
      ],

      {
        cancelable: true,
        // onDismiss: () =>
        //   Alert.alert(
        //     'This alert was dismissed by tapping outside of the alert dialog.',
        //   ),
      },
    );

  const FillAllFields = () => {
    showMessage({
      message: 'please fill all the fields',
      type: 'info',
      color: '#FFFF',
      backgroundColor: '#ff4d4d',
      // hideStatusBar: true,
      floating: true,
      position: 'top',
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

  const sendCredentials = async () => {
    fetch('http://13.232.252.51:5000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        console.log(data);
        console.log(data);

        try {
          await AsyncStorage.setItem('token', data.token);
          navigation.replace('home');
        } catch (e) {
          console.log('Error hai', e);
          // showAlert(e);
          {
            email.length == 0 || password.length == 0 ? Invalid() : Invalid1();
          }
        }
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  console.log('my email and password');

  console.log(email);
  console.log(password);

  console.log('my email and password');

  const removetoken = () => {
    AsyncStorage.removeItem('token', err => console.log('userId', err));
  };

  const token11 = AsyncStorage.getItem('token');
  console.log(token11);

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

  const P100 = '100%';

  return (
    <KeyboardAvoidingView
      style={styles.logincontainer}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
      {/* <Text style={styles.txtlogo}>SpanCock</Text> */}

      <View style={styles.fieldscontainer}>
        <View style={styles.initialscreencontainer1}>
          <Image
            source={require('../assets/images/group14.png')}
            style={styles.mainlogo}></Image>
          {/* <Image
              source={require('../assets/images/plaxbox1.png')}
              style={styles.maintext}></Image> */}
        </View>

        {/* <Image
          style={styles.profileimage}
          source={require('../assets/images/plaxbox2.png')}></Image> */}
        <View style={styles.txtcontainer}>
          <Text style={styles.txthead}>Let's Get Started With Plaxbox 👋</Text>
          {/* <Image
            source={require('../assets/images/span.png')}
            style={{width: 150, height: 55}}></Image> */}
        </View>

        <TextInput
          placeholder="Email"
          style={styles.email}
          value={email}
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}></TextInput>

        <TextInput
          placeholder="Password"
          style={styles.password}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}></TextInput>

        {/* <View style={styles.btncontainer}>
          <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"></Button>
        </View> */}
        {/* <Text style={styles.txt2} onPress={() => navigation.replace('signup')}>
          Create a New Account
        </Text> */}
        {/* <Text>It is {new Date().toLocaleTimeString()}.</Text> */}

        {email.length > 0 && password.length > 0 ? (
          <TouchableRipple
            style={styles.btn}
            rippleColor="rgba(255, 255, 255, .4)"
            onPress={() => {
              sendCredentials();
            }}>
            <View>
              <Text style={styles.btntxt}>Login</Text>
            </View>
          </TouchableRipple>
        ) : (
          <TouchableRipple
            style={styles.btnvaluesinvalid}
            rippleColor="rgba(255, 255, 255, .4)"
            onPress={() => {
              FillAllFields();
            }}>
            <View>
              <Text style={styles.btntxt}>Login</Text>
            </View>
          </TouchableRipple>
        )}
      </View>

      {isKeyboardVisible == true ? null : (
        <View style={styles.svgcontainer}>
          <Image
            style={styles.svgimage}
            source={require('../assets/images/svg5.png')}></Image>
        </View>
      )}

      <View style={styles.txt2container}>
        <Text style={styles.txt2} onPress={() => navigation.replace('signup')}>
          Create a New Account ?
        </Text>
        <Text
          style={styles.txt2Register}
          onPress={() => navigation.replace('signup')}>
          Register
        </Text>
      </View>

      <View
        style={[
          styles.container,
          modalVisible === true
            ? {
                backgroundColor: 'rgba(0,0,0,0.75)',
                width: P100,
                height: P100,
                position: 'absolute',
              }
            : '',
        ]}>
        <Modal
          // animationType="slide"
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          // style={{
          //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
          // }}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalViewuppertext}>
                <Text style={styles.modalText}>Invalid Credientials</Text>
                <Text style={styles.modalTextSmall}>
                  The credientials you entered is incorrect. Please try again
                </Text>
              </View>

              <TouchableOpacity
                style={styles.modalViewdowntext}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.tryagain}>Try again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}

      {modalVisible === true ? (
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="rgba(250,245,239,0.75)"
        />
      ) : null}

      <FlashMessage position="top" />
    </KeyboardAvoidingView>
  );
};

export default Login;
const P100 = '100%';
const P90 = '90%';
const P80 = '85%';
const P75 = '75%';
const P60 = '60%';

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    justifyContent: 'flex-start',
  },
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-BlackItalic',
    // textAlign: 'center',
    marginLeft: 10,
  },
  txtcontainer: {
    width: P80,
    // backgroundColor: '#FFFF',
    // justifyContent: 'center',
    // alignItems: 'center',
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
    // backgroundColor: '#000000',
    width: P80,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    // paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    // borderColor: '#7D7878',
    borderColor: '#D9D3D3',
  },
  name: {
    // backgroundColor: '#000000',
    width: P80,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    // fontSize: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  password: {
    // backgroundColor: '#000000',
    width: P80,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    // paddingLeft: 10,
    borderBottomWidth: 1,
    // borderColor: '#7D7878',
    borderColor: '#D9D3D3',
  },
  fieldscontainer: {
    paddingTop: 60,
    // backgroundColor: '#FFFF',
  },
  btncontainer: {
    width: P80,
    alignSelf: 'center',
  },
  btn: {
    height: 50,
    width: P80,
    backgroundColor: '#12BF0E',
    backgroundColor: '#F6421B',
    backgroundColor: '#ff4d4d',
    // backgroundColor: '#0FA60C',
    alignSelf: 'center',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    // opacity: 0.3,
  },
  btnvaluesinvalid: {
    height: 50,
    width: P80,
    backgroundColor: '#12BF0E',
    backgroundColor: '#F6421B',
    backgroundColor: '#ff4d4d',
    // backgroundColor: '#0FA60C',
    alignSelf: 'center',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    opacity: 0.3,
  },
  btntxt: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 19,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.3,
    // letterSpacing: 1,
  },
  txt2: {
    color: '#000000',
    // width: P90,

    paddingTop: 10,
    marginLeft: 10,
    fontFamily: 'Poppins-Medium',
    // backgroundColor: '#FFFF',
  },
  txt2Register: {
    fontFamily: 'Poppins-Bold',
    // backgroundColor: '#FFFF',
    paddingTop: 10,
    marginLeft: 5,
    color: '#000000',
  },
  txt2container: {
    // backgroundColor: '#F65F65',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    // paddingBottom: 10,
    marginTop: 10,
  },
  txthead: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 27,
  },
  // profileimage: {
  //   width: 600,
  //   height: 150,
  //   // backgroundColor: '#FFFF',
  //   alignSelf: 'center',
  //   marginTop: -20,
  // },
  mainlogo: {
    width: 55,
    height: 55,
  },
  maintext: {
    width: 250,
    height: 200,
    marginTop: -50,
  },
  modalViewdowntext: {
    // backgroundColor: '#696969',
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    height: 50,
    width: P100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
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
  svgimage: {
    width: 220,
    height: 110,
  },
  svgcontainer: {
    position: 'absolute',
    bottom: 0,
    right: 2,
  },
  mainlogo: {
    width: 55,
    height: 55,
  },
  maintext: {
    width: 270,
    height: 200,
    marginTop: -50,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    // marginTop: -50,
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    borderRadius: 20,
    // padding: 25,
    alignItems: 'center',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 1,
    justifyContent: 'space-between',
    display: 'flex',
    direction: 'column',
    backgroundColor: '#FFFFFF',
    width: P75,
    height: 150,
  },
  tryagain: {
    fontFamily: 'Poppins-Bold',
    // paddingTop: 10,
    // width: P75,
    // height: 10,
    color: '#ff4d4d',
    fontSize: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    padding: 20,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 20,
  },
  modalTextSmall: {
    // marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#696969',
    fontSize: 12,
    paddingRight: 20,
    // marginTop: -10,
    paddingLeft: 20,
  },
  modalViewuppertext: {
    height: 100,
    // backgroundColor: '#F15F15',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});
