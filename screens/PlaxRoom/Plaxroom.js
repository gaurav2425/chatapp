import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableRipple} from 'react-native-paper';

const PlaxRoom = ({navigation: {goBack}}) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotificationData = async () => {
    const token = await AsyncStorage.getItem('token');
    const fetchMYAPI = async () => {
      fetch(`http://13.232.252.51:5000/api/users/mine/notifications`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log('Data Of Notification');
          console.log(data.Notifications);
          console.log('Data Of Notification');
          setNotifications(data.Notifications);
          console.log(data.date);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchMYAPI();
  };

  useEffect(() => {
    fetchNotificationData();
  }, []);
  return (
    <View style={styles.notificationcontainer}>
      <View style={styles.notificationheader}>
        <TouchableRipple
          onPress={() => {
            goBack();
          }}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          // style={{marginLeft: 25}}

          style={styles.backripple}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            style={styles.icon1}></Ionicons>
        </TouchableRipple>
        <Text style={styles.nametxt}>PlaxRooms</Text>
      </View>
    </View>
  );
};

export default PlaxRoom;
// const statusbarHeight = StatusBar.currentHeight;
const styles = StyleSheet.create({
  notificationcontainer: {
    // marginTop: statusbarHeight,
    flex: 1,
    backgroundColor: '#FAF5EF',
  },
  notificationheader: {
    // flex: 0.07,
    height: 50,
    // backgroundColor: '#F65F65',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
  icon1: {
    color: '#000000',
  },
  backicon: {
    fontSize: 30,
    position: 'absolute',
    flexDirection: 'row',
    display: 'flex',
    fontWeight: '400',
    color: '#000000',
  },
  backripple: {
    fontSize: 30,
    left: 10,
    position: 'absolute',
    flexDirection: 'row',
    display: 'flex',
    fontWeight: '400',
    color: '#000000',
    // marginLeft: 10,
    padding: 10,
    borderRadius: 30,
  },
  nametxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#000000',
  },
  notificationbody: {
    // flex: 0.9,
  },
  notificationloadercontainer: {
    // backgroundColor: '#FFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
