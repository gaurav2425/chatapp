import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import RoomBarCircle from './RoomBarCircle';

const RoomsBar = () => {
  return (
    <View style={styles.roombar}>
      <ScrollView
        style={styles.roombar_sub}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <RoomBarCircle
          url="https://i.ibb.co/fDFZV3Z/group13.png"
          title="PlaxRoom"></RoomBarCircle>
        <RoomBarCircle
          url="https://media.istockphoto.com/photos/cartoon-characters-sends-sms-picture-id1288942870?b=1&k=20&m=1288942870&s=170667a&w=0&h=NIYl1xyGZ8ELu-Fdqs0LNFgSuD-HMYwnB2Aruh49uo4="
          title="Close Friends"></RoomBarCircle>
        <RoomBarCircle
          url="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"
          title="Watch"></RoomBarCircle>
        <RoomBarCircle
          url="https://cdn.pixabay.com/photo/2016/08/23/15/12/popcorn-1614707_960_720.png"
          title="Party"></RoomBarCircle>
        <RoomBarCircle
          url="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
          title="Events"></RoomBarCircle>
        <RoomBarCircle></RoomBarCircle>
      </ScrollView>
    </View>
  );
};

export default RoomsBar;

const P90 = '90%';
const styles = StyleSheet.create({
  roombar: {
    // height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  roombar_sub: {
    width: P90,
    height: 105,
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#F65F65',
  },
});
