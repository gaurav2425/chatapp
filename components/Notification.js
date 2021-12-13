import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Notification = ({notification}) => {
  return (
    <View style={styles.notificationcontainer}>
      <View style={styles.container1}>
        <View style={styles.imagecontainer}>
          <Image
            source={require('.././assets/images/punk8033.png')}
            style={styles.image}></Image>
        </View>
        <View style={styles.notificationtxt}>
          {/* <Text style={styles.notificationname}>Sonny Sangha</Text> */}
          <Text style={styles.notificationmsg}>{notification}</Text>
        </View>
      </View>
      <View style={styles.time}>
        <Text style={styles.timetxt}>12:21 pm</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#FFFF',
    // borderWidth: 1,
    padding: 10,
  },
  imagecontainer: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginLeft: 15,
  },
  notificationmsg: {
    marginLeft: 25,
    maxWidth: 180,
    marginTop: 5,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 13,
  },
  time: {
    // position: "absolute",
    right: 0,
    marginRight: 8,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
  },
  timetxt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    marginTop: 5,
    fontSize: 13,
  },
});
