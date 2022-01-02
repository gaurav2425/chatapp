import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  RefreshControl,
} from 'react-native';
import {TouchableRipple, ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification, {Importance} from 'react-native-push-notification';
import Header from '../components/Header';
import Chat from '../components/Chat';
import Story from '../components/Story';
import {useSelector, useDispatch} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {MyProfileInfoAction} from '../actions/MyProfileInfoaction';
import {UserClickAction} from '../actions/UserClick';
import {UserData, UserPassword} from '../actions/Useraction';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Home = ({navigation}) => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);
  //   const [token, setToken] = useState('');
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [friends, setFriends] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileToken, setMobileToken] = useState('');
  // const [token, setToken] = useState('');

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);
  console.log(MyProfileInfo);

  const MyClick = useSelector(state => state.UserClick);
  console.log('MyProfileInfo Clicked');
  console.log('MyProfileInfo Clicked');
  // console.log(MyClick);
  console.log(MyProfileInfo);
  console.log('MyProfileInfo Clicked');
  console.log('MyProfileInfo Clicked');

  const dispatch = useDispatch();
  const tokenmain = AsyncStorage.getItem('token');

  const fetchtoken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    console.log(token);
    console.log(token);
    console.log(token);
    console.log(token);
    // setToken(tokenauth);
    fetch('http://192.168.1.7:5000/api/auth', {
      headers: new Headers({
        'x-auth-token': token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
        // setToken(token);
      });
  };

  const handleReduxData = async data => {
    const token = await AsyncStorage.getItem('token');
    dispatch(
      MyProfileInfoAction({
        myprofile: data,
        token: token,
      }),
    );
  };

  const fetchMyProfileInfo = async () => {
    const token = await AsyncStorage.getItem('token');
    // setToken(tokenauth);
    fetch('http://192.168.1.7:5000/api/profile/myprofileinfo', {
      headers: new Headers({
        'x-auth-token': token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('I am MyProfile');
        console.log('I am MyProfile');
        console.log('I am MyProfile');
        console.log(data);
        console.log('I am MyProfile');
        console.log('I am MyProfile');
        console.log('I am MyProfile');
        setProfile(data);
        handleReduxData(data);
      });
  };

  useEffect(() => {
    fetchtoken();
    fetchMyProfileInfo();
  }, []);

  const LogOut = () => {
    AsyncStorage.removeItem('token').then(() => {
      navigation.replace('login');
    });
  };

  const fetchProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    // setToken(tokenauth);
    fetch('http://192.168.1.7:5000/api/profile/me', {
      headers: new Headers({
        'x-auth-token': token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProfileData(data);
      })
      .catch(err => {
        // console.log(err);
        // throw err;
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // console.log('I am My profile from redux', MyProfileInfo);

  const fetchFriends = async () => {
    const token = await AsyncStorage.getItem('token');
    // setToken(tokenauth);
    fetch('http://192.168.1.7:5000/api/users/myfriends/all', {
      headers: new Headers({
        'x-auth-token': token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setFriends(data);
        setLoading(false);
      })
      .catch(err => {
        // console.log(err);
        // throw err;
      });
  };

  useEffect(() => {
    fetchFriends();
    console.log('_________');
    console.log(friends);
    console.log('_________');
  }, []);

  console.log(friends);

  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: '123', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        color: 'red',
      },
      created => console.log(`createChannel returned '${created}'`), //
    );
  };

  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token.os);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        setMobileToken(token.token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    createChannel();
  }, []);

  console.log(
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    }),
  );

  const Test = () => {
    PushNotification.localNotification({
      channelId: '123',
      title: 'Slack', // (optional)
      ticker: 'My Notification Ticker',
      to: 'c31Ga-88TwajoMzEsle7Ir:APA91bHDs3hA8ATza6UyH0-NaM6we29R4RIsBfRaklk4aUVez7QASoGpNjYy4aqUrmB6Yi_2_qLkPpS0Upv3L5HVcE0FZX3EWCwH8E_nv6T3EuYcyGqp9OAx4Zz7fVNMSzF_LlX0yC_w',
      message: 'Ye kaam kar de pehle', // (required)
      picture: 'http://assets.stickpng.com/images/5cb480b85f1b6d3fbadece78.png', // (optional)
      // backgroundColor: '#F65F65',
      // playSound: true, // (optional) default: true
      // soundName: 'default',
      // playSound: true,
      // // actions: ['Yes', 'No'],
      // group: 'group',
      // bigLargeIcon: 'ic_launcher',
      // bigText:
      //   'My big text that will be shown when notification is expanded. Styling can be done using HTML tags(see android docs for details)', // (optional) default: "message" prop
      // subText: 'This is a subText',
      // reply_button_text: 'Reply',
      ticker: 'My Notification Ticker', // (optional)
      showWhen: true, // (optional) default: true
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher". Use "" for no large icon.
      largeIconUrl:
        'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png', // (optional) default: undefined
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
      bigText:
        'My big text that will be shown when notification is expanded. Styling can be done using HTML tags(see android docs for details)', // (optional) default: "message" prop
      subText: 'Slack is doing Great', // (optional) default: none
      bigPictureUrl:
        'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png', // (optional) default: undefined
      bigLargeIcon: 'ic_launcher', // (optional) default: undefined
      bigLargeIconUrl:
        'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png', // (optional) default: undefined
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      actions: ['ReplyInput'],
      reply_placeholder_text: 'Reply', // (required)
      reply_button_text: 'Reply',
      // group: 'group',
      // (optional) add group to message
      // groupSummary: true,
      // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      priority: 'high', // (optional) set notification priority, default: high
      visibility: 'private', // (optional) set notification visibility, default: private
      ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
      shortcutId: 'shortcut-id', // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
      onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false

      when: null, // (optional) Add a timestamp (Unix timestamp value in milliseconds) pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      messageId: 'google:message_id', // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module.

      // actions: ['Okay', 'Reply'],
      // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
      reply_placeholder_text: 'Reply', // (required)
      reply_button_text: 'Reply', // (required)
      userInfo: 'Gaurav',
    });
  };

  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  //Notification Sender
  console.log(mobileToken);
  console.log(mobileToken);
  console.log(mobileToken);
  console.log(mobileToken);

  return (
    <View style={styles.homecontainer}>
      <Header></Header>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}></RefreshControl>
        }>
        <View style={styles.storymaincontainer}>
          <ScrollView
            horizontal={true}
            style={styles.storymaincontainer}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.yourstory}>
              {/* <AntDesign
                name="plus"
                size={15}
                style={styles.plusIcon}></AntDesign> */}
              <Story name="You" borderless></Story>
            </View>

            <Story name="gaurav"></Story>
            <Story name="Ajinkya"></Story>
            <Story name="swaraj"></Story>
            <Story name="pinky"></Story>
            <Story name="naman"></Story>
            <Story name="vishal"></Story>
            <Story name="karan"></Story>
            <Story name="hemant"></Story>
          </ScrollView>
        </View>

        <View style={styles.searchinputcontainer}>
          <View style={styles.searchcontainer}>
            <EvilIcons
              name="search"
              size={25}
              style={styles.searchicon}></EvilIcons>

            <TextInput
              placeholder="Search For Friends"
              style={styles.searchinput}></TextInput>
          </View>
        </View>
        <Text style={styles.chattxt}>Friends Chat</Text>
        {loading ? (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size={40} color="#3E3C9C" />
          </View>
        ) : (
          <>
            {MyProfileInfo.myprofile.Friends.map((friend, index) => {
              return (
                <TouchableRipple
                  rippleColor="rgba(0, 0, 0, .1)"
                  borderless
                  key={index}
                  onPress={() => {
                    let userclickId = friend.user;

                    dispatch(
                      UserClickAction({
                        userclickId,
                      }),
                    );

                    navigation.navigate('ChatScreen');
                  }}>
                  <Chat name={friend.name}></Chat>
                </TouchableRipple>
              );
            })}
          </>
        )}

        <TouchableOpacity
          onPress={() => {
            Test();
          }}>
          <Text>Press me to send notification</Text>
        </TouchableOpacity>

        {/* <Chat name="arpit jaggi"></Chat> */}

        {/* {friends.map((friend, index) => {
          // <Chat name={friend.name}></Chat>;
          console.log(friend.email);

          return (
            <TouchableRipple
              onPress={() => navigation.navigate('ChatScreen')}
              rippleColor="rgba(0, 0, 0, .1)"
              borderless
              key={index}>
              <Chat name={friend.name}></Chat>
            </TouchableRipple>
          );
        })} */}

        {/* <Chat name="gaurav burande"></Chat>
        <Chat name="Ajinkya sahu"></Chat>
        <Chat name="swaraj pawar"></Chat>
        <Chat name="pinky sharma"></Chat>
        <Chat name="naman yadav"></Chat>
        <Chat name="vishal singh"></Chat>
        <Chat name="karan mehra"></Chat>
        <Chat name="hemant thackrey"></Chat> */}

        {/* <Text style={styles.txt1}>Email: {data.email}</Text>
        <Text style={styles.txt1}>Name: {data.name}</Text>
        <Text style={styles.txt1}>Username :{data.username}</Text>
        <Text style={styles.txt1}>Err :{profileData.msg}</Text> */}
      </ScrollView>
      {/* <TouchableOpacity style={styles.btn} onPress={() => LogOut()}>
        <Text style={styles.btntxt}>LogOut</Text>
      </TouchableOpacity> */}

      {/* <BottomTabNavigation></BottomTabNavigation> */}

      {/* <Text>I am Home</Text> */}
      <StatusBar barStyle="dark-content" backgroundColor="#FAF5EF"></StatusBar>
    </View>
  );
};

export default Home;
const P90 = '90%';
const P100 = '100%';
const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F6EC',
    fontFamily: 'Poppins-Medium',
    backgroundColor: '#FAF5EF',
  },
  btn: {
    height: 50,
    width: P90,
    backgroundColor: '#860F7A',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btntxt: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 18,
    fontFamily: 'Poppins-BoldItalic',
  },
  txt1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#000000',
  },
  scrollview: {
    width: P100,
    // flex: 0.9,
  },
  storymaincontainer: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: '#FA5050',
    backgroundColor: '#FAF5EF',
    // justifyContent: 'center',
    height: 100,
  },
  chattxt: {
    marginLeft: 25,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  yourstory: {
    marginLeft: 10,
    // backgroundColor: '#FFFF',
    justifyContent: 'center',
    marginRight: 5,
  },

  searchinput: {
    // backgroundColor: "#FF7F50",
    width: P90,
    // fontSize: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingLeft: 5,
    // backgroundColor: '#FFFF',
    // backgroundColor: '#800000',

    fontFamily: 'Poppins-Medium',
    padding: 9,
    paddingBottom: 6,
  },
  searchcontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: P90,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#800000",
    backgroundColor: '#FFE4E1',
    // height: 40,
    borderRadius: 10,
    backgroundColor: '#F2EDE6',
    backgroundColor: '#F3EBE0',

    // backgroundColor: '#800000',
  },
  searchicon: {
    color: '#000000',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  searchinputcontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: P100,
    justifyContent: 'center',
    // paddingBottom: 10,
    paddingBottom: 10,
  },
  plusIcon: {
    position: 'absolute',
    right: 10,
    bottom: 25,
    backgroundColor: '#3E3C9C',
    borderRadius: 30,
    zIndex: 111,
    padding: 2,
    color: '#FFFF',
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: '#FFFF',
    height: 200,
  },
});
