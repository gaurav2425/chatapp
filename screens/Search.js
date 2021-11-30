import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  RefreshControl,
  ScrollView,
  StatusBar,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import RoomChat from '../components/RoomChat';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({navigation}) => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.searchscreenmain}>
      <View style={styles.searchscreenheader}>
        <View style={styles.searchscreenheader1}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            style={styles.icon1}></Ionicons>
          <Text style={styles.txt}>Explore</Text>
          <AntDesign name="contacts" size={27} style={styles.icon2}></AntDesign>
        </View>
        <View style={styles.inputcontainermain}>
          <View style={styles.inputcontainer}>
            <EvilIcons
              name="search"
              size={25}
              style={styles.iconsearch}></EvilIcons>
            <TextInput
              placeholder="Search For People and Rooms"
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}
              style={styles.txtinput}></TextInput>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollcontainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}></RefreshControl>
        }>
        <View style={styles.txt1container}>
          <Text style={styles.txt1}>Public Clubs To Join</Text>
        </View>
        <View style={styles.accountcontainer}>
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onPress={() => {
              navigation.navigate('clubdetailscreen');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            onLongPress={() => {
              console.log('long pressed');
            }}>
            <RoomChat
              chatname="Good Times Club"
              message="613 Members . 178K Followers"
              time="5:12 Am"></RoomChat>
          </TouchableRipple>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FAF5EF" />
    </View>
  );
};

export default SearchScreen;

const widthmain = '100%';
const heightmain = '100%';
// const inputscreenheaderheight = "20%";
const widthinput = '90%';
const inputcontainermain = '50%';
const searchscreenheader1 = '50%';
const fivepercent = '7%';
const scrollcontainer = '100%';
const P90 = '90%';
// const P100 = '90%';
const styles = StyleSheet.create({
  searchscreenmain: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    // backgroundColor: "#FAEBD7",
  },
  searchscreenheader: {
    width: widthmain,
    justifyContent: 'center',
    // height: 110,
    position: 'absolute',
  },
  inputcontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: P90,
    alignItems: 'center',
    // paddingTop: 10,
    // paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FFE4E1',
    backgroundColor: '#F3EBE0',
    // borderWidth: 0.5,
    backgroundColor: '#FFE4E1',
  },
  inputcontainermain: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FAF5EF',
  },
  searchscreenheader1: {
    backgroundColor: '#FAF5EF',
    // flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 35,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  iconsearch: {
    marginLeft: 10,
    marginRight: 5,
    // backgroundColor: '#FFFF',
    alignSelf: 'center',
    fontSize: 30,
    color: '#000000',
  },
  txt1: {
    marginLeft: fivepercent,
    fontSize: 13,
    // fontWeight: "700",
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  txt1container: {
    // paddingTop: 10,
    // paddingBottom: 10,
    // backgroundColor: '#FFFF',
  },
  scrollcontainer: {
    height: scrollcontainer,
    marginTop: 125,
  },
  icon1: {
    paddingLeft: 20,
    color: '#000000',
  },
  icon2: {
    paddingRight: 25,
    color: '#000000',
  },
  txtinput: {
    height: 50,
    width: P90,
    borderRadius: 15,
  },
});
