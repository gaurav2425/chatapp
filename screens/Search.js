import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  RefreshControl,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import RoomChat from '../components/RoomChat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreChat from '../components/ExploreChat';
import {UserClickAction} from '../actions/UserClick';
import {useSelector, useDispatch} from 'react-redux';

const SearchScreen = ({navigation}) => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const [users, SetUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const MyClick = useSelector(state => state.UserClick);
  console.log(MyClick);

  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const fetchFriends = async () => {
    const token = await AsyncStorage.getItem('token');
    // setToken(tokenauth);
    fetch('http://13.232.252.51:5000/api/profile/users/all', {
      headers: new Headers({
        'x-auth-token': token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        SetUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    fetchFriends();
    console.log('_________');
    // console.log(friends);
    console.log('_________');
  }, []);

  let x = users;
  let y = MyProfileInfo.myprofile.Friends;
  let z = MyProfileInfo.myprofile;

  let yFilter = y.map(itemY => {
    return itemY.username;
  });

  let filteredX = x.filter(
    itemX => !yFilter.includes(itemX.username) && z.username != itemX.username,
  );

  return (
    <View style={styles.searchscreenmain}>
      <View style={styles.searchscreenheader}>
        <View style={styles.searchscreenheader1}>
          {/* <Ionicons
            name="chevron-back-sharp"
            size={30}
            style={styles.icon1}></Ionicons> */}
          <Text style={styles.txt}>Explore</Text>
          <AntDesign name="contacts" size={25} style={styles.icon2}></AntDesign>
        </View>
        <View style={styles.inputcontainermain}>
          <View style={styles.inputcontainer}>
            <EvilIcons
              name="search"
              size={25}
              style={styles.iconsearch}></EvilIcons>
            <TextInput
              placeholder="Search For People"
              // style={{
              //   fontSize: 12,
              //   fontFamily: 'Poppins-Medium',
              // }}
              value={searchTerm}
              // onChange={e => {
              //   setSearchTerm(e.target.value);
              // }}
              onChangeText={text => setSearchTerm(text)}
              style={styles.txtinput}></TextInput>
          </View>
        </View>
      </View>

      {loading ? (
        <View style={styles.searchloadercontainer}>
          <ActivityIndicator size={50} color="#3E3C9C" />
        </View>
      ) : (
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
            <Text style={styles.txt1}>Public Profiles to Connect</Text>
          </View>
          <View style={styles.accountcontainer}>
            {filteredX

              .filter(user => {
                if (searchTerm == '') {
                  return user;
                } else if (
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return user;
                }
              })
              .slice(0, 8)
              .map((user, index) => (
                <TouchableRipple
                  onPress={() => {
                    navigation.navigate('profiledetail');
                    // console.log(item);
                    let userclickId = user.user;

                    dispatch(
                      UserClickAction({
                        userclickId,
                      }),
                    );
                  }}
                  rippleColor="rgba(0, 0, 0, .1)"
                  borderless
                  key={index}>
                  <ExploreChat
                    name={user.name}
                    username={user.username}
                    key={index}></ExploreChat>
                </TouchableRipple>

                // <Text key={index}>{item.name}</Text>
              ))}
          </View>
        </ScrollView>
      )}

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
    borderRadius: 20,
    backgroundColor: '#FFE4E1',
    backgroundColor: '#F3EBE0',
    // borderWidth: 0.5,
    backgroundColor: '#FFE4E1',
    backgroundColor: '#F3EBE0',
  },
  inputcontainermain: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
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
    // backgroundColor: '#F65F65',
  },
  txt: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    marginLeft: 25,
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
    fontFamily: 'Poppins-Medium',
    paddingTop: 14,
    // backgroundColor: '#FFFF',
  },
  searchloadercontainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>

// <TouchableRipple
// onPress={() => console.log('Pressed')}
// rippleColor="rgba(0, 0, 0, .1)"
// borderless
// onLongPress={() => {
//   console.log('long pressed');
// }}>
// <RoomChat
//   chatname="Good Times Club"
//   message="613 Members . 178K Followers"
//   time="5:12 Am"></RoomChat>
// </TouchableRipple>
