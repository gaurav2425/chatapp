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
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setEmail} from '../actions/index';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification, {Importance} from 'react-native-push-notification';
import {UserData, UserPassword, LoginAction} from '../actions/Useraction';
// import {useSelector, useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      'Entered Email or Password is Invalid',
      [
        {
          text: 'ok',
          // onPress: () => Alert.alert('Cancel Pressed'),
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

  const sendCredentials = () => {
    const fetchMYAPI = async () => {
      fetch('http://192.168.1.7:5000/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(async data => {
          console.log(data);

          try {
            await AsyncStorage.setItem('token', data.token);
            navigation.replace('home');
          } catch (e) {
            //saving error
            console.log('Error hai', e);
            showAlert(e);
          }
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI();
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.logincontainer}>
      {/* <Text style={styles.txtlogo}>SpanCock</Text> */}

      <View style={styles.fieldscontainer}>
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
        <TouchableOpacity
          // style={styles.btn}
          // onPress={(() => handleLoginReduxData, sendCredentials)}
          onPress={() => {
            dismissKeyboard(), sendCredentials();
            // Test();
            // pushschedule();
          }}
          // onPress={Keyboard.dismiss}
        >
          <LinearGradient
            style={styles.btn}
            colors={['#8a3ab9', '#e95950', '#fccc63']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.btntxt}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

export default Login;
const P90 = '90%';
const P80 = '85%';

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    justifyContent: 'space-between',
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
    marginTop: 40,
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
    paddingTop: 80,
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
    // backgroundColor: '#0FA60C',
    alignSelf: 'center',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
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
    paddingBottom: 30,
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
});
