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
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  //   const [token, setToken] = useState('');
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [friends, setFriends] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [token, setToken] = useState('');

  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);
  console.log(MyProfileInfo);

  const MyClick = useSelector(state => state.UserClick);
  console.log('User Clicked');
  console.log('User Clicked');
  console.log(MyClick);
  console.log('User Clicked');
  console.log('User Clicked');

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
        data,
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

  return (
    <View style={styles.homecontainer}>
      <Header></Header>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View style={styles.storymaincontainer}>
          <ScrollView
            horizontal={true}
            style={styles.storymaincontainer}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.yourstory}>
              <AntDesign
                name="plus"
                size={15}
                style={styles.plusIcon}></AntDesign>
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
              placeholder="Search For people"
              style={styles.searchinput}></TextInput>
          </View>
        </View>
        <Text style={styles.chattxt}>Friends Chat</Text>
        {friends.map((friend, index) => {
          return (
            <TouchableRipple
              rippleColor="rgba(0, 0, 0, .1)"
              borderless
              key={index}
              onPress={() => {
                let userclickId = friend.user;
                navigation.navigate('ChatScreen');

                dispatch(
                  UserClickAction({
                    userclickId,
                  }),
                );
              }}>
              <Chat name={friend.name}></Chat>
            </TouchableRipple>
          );
        })}

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
});
