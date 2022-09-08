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
import LinearGradient from 'react-native-linear-gradient';
import PushNotification, {Importance} from 'react-native-push-notification';
import Header from '../components/Header';
import Firebase from '@react-native-firebase/app';
import Chat from '../components/Chat';
import Story from '../components/Story';
import {useSelector, useDispatch} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {MyProfileInfoAction} from '../actions/MyProfileInfoaction';
import {UserClickAction} from '../actions/UserClick';
import {UserClickNameAction} from '../actions/UserClickName';
import {UserData, UserPassword} from '../actions/Useraction';
import AntDesign from 'react-native-vector-icons/AntDesign';
import messaging from '@react-native-firebase/messaging';
import {state} from 'react-native-push-notification/component';
import RoomsBar from '../components/RoomsBar';
import Header1 from '../components/Header1';
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
  console.log(MyProfileInfo.mobiletoken);

  const MyClick = useSelector(state => state.UserClick);
  const MyClickName = useSelector(state => state.UserClickName);
  console.log('MyProfileInfo moooooo');
  console.log('MyProfileInfo moooooo');
  console.log(MyClickName);
  console.log(MyProfileInfo.mobiletoken);
  console.log('MyProfileInfo moooooo');
  console.log('MyProfileInfo moooooo');

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
    fetch('http://13.232.252.51:5000/api/auth', {
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

  const loadnotification = () => {
    // Firebase.initializeApp();

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token.os);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        console.log('TOKEN:', token);
        // setMobileToken(token.token);

        // dispatch(
        //   MyProfileInfoAction({
        //     mobiletoken: '12345678',
        //   }),
        // );
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },

      senderID: '388911307516',

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  };

  const handleReduxData = async data => {
    const token = await AsyncStorage.getItem('token');
    dispatch(
      MyProfileInfoAction({
        myprofile: data,
        token: token,
        mobiletoken: mobileToken,
      }),
    );
  };

  const fetchMyProfileInfo = async () => {
    const token = await AsyncStorage.getItem('token');
    // setToken(tokenauth);
    fetch('http://13.232.252.51:5000/api/profile/myprofileinfo', {
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
        console.log(data.mobiletoken);
        console.log('I am MyProfile');
        console.log('I am MyProfile');
        console.log('I am MyProfile');
        setProfile(data);
        handleReduxData(data);
      });
  };

  useEffect(() => {
    Firebase.messaging()
      .getToken()
      .then(token => {
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log(token);
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
      });
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
    fetch('http://13.232.252.51:5000/api/profile/me', {
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
    fetch('http://13.232.252.51:5000/api/users/myfriends/all', {
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

  // useEffect(() => {
  //   sendMobileToken();
  // }, []);

  // useEffect(() => {
  //   loadnotification();
  //   createChannel();
  // }, []);

  const sendMobileToken = async () => {
    const token = await AsyncStorage.getItem('token');

    // const mtoken = await mobileToken;
    const fetchMYAPI = async () => {
      fetch('http://13.232.252.51:5000/api/profile/token/mobiletoken', {
        method: 'POST',

        headers: new Headers({
          'x-auth-token': token,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          mobiletoken: `${mobileToken}`,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
          console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
          console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
          console.log(mobileToken);
          console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
          console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
          console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI();
  };

  console.log('I am Mobile Token');
  console.log('I am Mobile Token');
  console.log(mobileToken);
  console.log('I am Mobile Token');
  console.log('I am Mobile Token');

  useEffect(() => {
    loadnotification();
    createChannel();
    // sendMobileToken();
  }, []);

  const testdata = async vtoken => {
    const token = await AsyncStorage.getItem('token');

    fetch('http://13.232.252.51:5000/api/profile/token/mobiletoken', {
      method: 'POST',

      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        mobiletoken: vtoken,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
        console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
        console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
        console.log(vtoken);
        console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
        console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
        console.log('Data from mobiletokennnnnnnnnnnnnnnnn');
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    const name = mobileToken;
    Firebase.messaging()
      .getToken()
      .then(token => {
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        let vtoken = token;
        testdata(vtoken);
        setMobileToken(vtoken);
        // sendReduxToken(token);

        // dispatch(
        //   MyProfileInfo({
        //     mobiletoken: mobileToken,
        //   })
        // )
        // dispatch(
        //   MyProfileInfoAction({
        //     myprofile: data,
        //     token: token,
        //     // mobiletoken: mobileToken,
        //   }),
        console.log(token);
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
        console.log('Token from swaggggggggggggggggggggggggggggggggg');
      });
  }, []);

  console.log(
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    }),
  );

  const Test = () => {
    PushNotification.localNotification({
      channelId: '123',
      title: 'plaxbox', // (optional)
      ticker: 'My Notification Ticker',
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

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      PushNotification.localNotification({
        channelId: '123',
        message: 'Hello',
        title: 'Hii',
        // bigPictureUrl: remoteMessage.notification.android.imageUrl,
        // smallIcon: remoteMessage.notification.android.imageUrl,
      });
    });
    return unsubscribe;
  }, []);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

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

  //mobiletoken saver
  //mobiletoken saver
  //mobiletoken saver
  //mobiletoken saver

  //mobiletoken saver
  //mobiletoken saver
  //mobiletoken saver
  //mobiletoken saver
  //mobiletoken saver

  return (
    <View style={styles.homecontainer}>
      {/* <Header></Header> */}
      <Header1></Header1>
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
            <View style={styles.yourstorymain}>
              <LinearGradient
                style={styles.yourstory}
                colors={['#8a3ab9', '#e95950']}>
                <AntDesign
                  name="plus"
                  size={32}
                  style={styles.plusIcon}></AntDesign>
              </LinearGradient>
              <Text style={styles.youtxt}>Your Story</Text>
            </View>

            <Story
              name="Shreyash"
              you
              uri="https://images.unsplash.com/photo-1621347310837-8ededa9854dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></Story>

            <Story
              name="Rosey"
              uri="https://images2.alphacoders.com/608/thumbbig-608610.webp"></Story>
            <Story
              name="Tim"
              uri="https://media.istockphoto.com/photos/stylish-man-posing-on-grey-background-picture-id973481674?b=1&k=20&m=973481674&s=170667a&w=0&h=N88rKUiC4M3YHGvanhxY5mMfVRsOSEKg9swrpwAnQQ0="></Story>
            <Story
              name="Chandler"
              uri="https://images.unsplash.com/photo-1533488069324-f9265c15d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></Story>
            <Story
              name="pinky"
              uri="https://media.istockphoto.com/photos/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-picture-id1277873802?b=1&k=20&m=1277873802&s=170667a&w=0&h=jkQ_v0-o10phanZhWxRn9QpvCAUKn8qwdWT5BtR9QWk="></Story>
            <Story
              name="naman"
              uri="https://images.unsplash.com/photo-1619182597083-17bda72c1d56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></Story>
            <Story
              name="Emmie"
              uri="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Story>
            <Story
              name="Kylie"
              uri="https://images.unsplash.com/photo-1615353616187-e19b09f4b7c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></Story>
            <Story
              name="hemant"
              uri="https://images.unsplash.com/photo-1626978407649-de62156f1548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></Story>
          </ScrollView>
        </View>

        {/* <View style={styles.searchinputcontainer}>
          <View style={styles.searchcontainer}>
            <EvilIcons
              name="search"
              size={25}
              style={styles.searchicon}></EvilIcons>

            <TextInput
              placeholder="Search For Friends"
              style={styles.searchinput}></TextInput>
          </View>
        </View> */}

        {/* <RoomsBar></RoomsBar> */}

        <View style={styles.inputcontainermain}>
          <View style={styles.inputcontainer}>
            <EvilIcons
              name="search"
              size={25}
              style={styles.iconsearch}></EvilIcons>
            <TextInput
              placeholder="Search For People"
              // value={searchTerm}

              // onChangeText={text => setSearchTerm(text)}
              style={styles.txtinput}></TextInput>
          </View>
        </View>

        <Text style={styles.chattxt}>Personal Chats</Text>
        {loading ? (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size={40} color="#ff4d4d" />
          </View>
        ) : (
          <View>
            {MyProfileInfo.myprofile.Friends?.length === 0 ? (
              <View style={styles.nofriendscontainer}>
                <Image
                  style={styles.svgimage}
                  source={require('../assets/images/Tipp1.png')}></Image>

                <Text style={styles.nofriendscontainertxt}>
                  👍You're all good! You don't have any friends
                </Text>
              </View>
            ) : (
              <>
                {MyProfileInfo.myprofile.Friends?.map((friend, index) => {
                  return (
                    <TouchableRipple
                      rippleColor="rgba(0, 0, 0, .1)"
                      borderless
                      key={index}
                      onPress={() => {
                        let userclickId = friend.user;
                        let userclickName = friend.name;

                        dispatch(
                          UserClickAction({
                            userclickId,
                          }),
                        );
                        dispatch(
                          UserClickNameAction({
                            userclickName,
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
          </View>
        )}

        {/* <TouchableOpacity
          onPress={() => {
            Test();
          }}>
          <Text>Press me to send notification</Text>
        </TouchableOpacity> */}

        <Chat name="gaurav burande"></Chat>
        <Chat name="Ajinkya sahu"></Chat>
        <Chat name="swaraj pawar"></Chat>
        <Chat name="pinky sharma"></Chat>
        <Chat name="naman yadav"></Chat>
        <Chat name="vishal singh"></Chat>
        <Chat name="karan mehra"></Chat>
        <Chat name="hemant thackrey"></Chat>
      </ScrollView>

      <StatusBar barStyle="dark-content" backgroundColor="#FAF5EF"></StatusBar>
    </View>
  );
};

export default Home;
const P70 = '70%';
const P90 = '90%';
const P50 = '50%';
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
    marginTop: 10,
  },
  yourstory: {
    // marginLeft: 10,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',

    // marginLeft: 20,
    // padding: 30,
    borderRadius: 40,
    width: 60,
    height: 60,
    marginTop: 1,
    alignSelf: 'center',
    // marginBottom: 10,
  },
  yourstorymain: {
    // backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 5,
  },

  youtxt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 11,
    marginTop: 4,
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
    // position: 'absolute',
    // right: 10,
    // bottom: 25,
    // backgroundColor: '#3E3C9C',
    borderRadius: 30,
    zIndex: 111,
    // padding: 20,
    color: '#FFFF',
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: '#FFFF',
    marginTop: P50,
  },
  nofriendscontainer: {
    width: P100,
    // backgroundColor: '#FFFF',
    alignSelf: 'center',
    // height: P70,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  svgimage: {
    width: 106,
    height: 197,
    alignSelf: 'center',
    marginTop: 50,
  },
  nofriendscontainertxt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 15,
    marginTop: 45,
    width: P70,
  },

  inputcontainermain: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FAF5EF',
  },
  inputcontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: P90,
    alignItems: 'center',
    // paddingTop: 10,
    // paddingBottom: 10,
    borderRadius: 17,
    backgroundColor: '#FFE4E1',
    backgroundColor: '#F3EBE0',
    backgroundColor: '#FFE4E1',
    backgroundColor: '#F3EBE0',
  },
  iconsearch: {
    marginLeft: 10,
    marginRight: 5,
    // backgroundColor: '#FFFF',
    alignSelf: 'center',
    fontSize: 30,
    color: '#000000',
  },
  txtinput: {
    height: 50,
    width: P90,
    borderRadius: 15,
    fontFamily: 'Poppins-Medium',
    paddingTop: 14,
    // backgroundColor: '#FFFF',
  },
});
