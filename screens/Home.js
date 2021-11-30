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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Home = ({navigation}) => {
  //   const [token, setToken] = useState('');
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [friends, setFriends] = useState([]);
  const fetchtoken = async () => {
    const token = await AsyncStorage.getItem('token');
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
      });
  };
  useEffect(() => {
    fetchtoken();
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
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchFriends = async () => {
    const token = await AsyncStorage.getItem('token');
    // setToken(tokenauth);
    fetch('http://192.168.1.7:5000/api/users/n1/myfriends', {
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
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    fetchFriends();
    console.log('_________');
    console.log(friends);
    console.log('_________');
  }, []);

  //   console.log(profileData);

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
              <Story name="You"></Story>
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
              placeholder="Search"
              style={styles.searchinput}
              // onFocus={() => {
              //   navigation.navigate("chatscreen");
              // }}
            ></TextInput>
          </View>
        </View>
        <Text style={styles.chattxt}>Friends Chat</Text>
        <TouchableRipple
          onPress={() => navigation.navigate('ChatScreen')}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless>
          <Chat name={data.name}></Chat>
        </TouchableRipple>

        <Chat name="arpit jaggi"></Chat>

        {friends.map((friend, index) => {
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
        })}

        <Chat name="gaurav burande"></Chat>
        <Chat name="Ajinkya sahu"></Chat>
        <Chat name="swaraj pawar"></Chat>
        <Chat name="pinky sharma"></Chat>
        <Chat name="naman yadav"></Chat>
        <Chat name="vishal singh"></Chat>
        <Chat name="karan mehra"></Chat>
        <Chat name="hemant thackrey"></Chat>

        <Text style={styles.txt1}>Email: {data.email}</Text>
        <Text style={styles.txt1}>Name: {data.name}</Text>
        <Text style={styles.txt1}>Username :{data.username}</Text>
        <Text style={styles.txt1}>Err :{profileData.msg}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => LogOut()}>
          <Text style={styles.btntxt}>LogOut</Text>
        </TouchableOpacity>
      </ScrollView>

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
    flex: 0.9,
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
    fontSize: 12,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingLeft: 5,
    // backgroundColor: '#FFFF',
    fontFamily: 'Poppins-Medium',
  },
  searchcontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: P90,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#800000",
    backgroundColor: '#FFE4E1',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F2EDE6',
    backgroundColor: '#F3EBE0',
    // backgroundColor: "#F3EEE7",
  },
  searchicon: {
    color: '#000000',
    paddingLeft: 20,
  },
  searchinputcontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: P100,
    justifyContent: 'center',
    paddingBottom: 10,
  },
});
