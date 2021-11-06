import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import Chat from '../components/Chat';
import Story from '../components/Story';
const Home = ({navigation}) => {
  //   const [token, setToken] = useState('');
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState([]);
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
      });
  };

  useEffect(() => {
    fetchProfile();
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
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
          </ScrollView>
        </View>
        <Text style={styles.chattxt}>Friends Chat</Text>
        <TouchableRipple
          onPress={() => navigation.navigate('ChatScreen')}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless>
          <Chat></Chat>
        </TouchableRipple>

        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>

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
    height: 90,
  },
  chattxt: {
    marginLeft: 25,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
});
