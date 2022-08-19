import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableRipple} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useSelector, useDispatch} from 'react-redux';

const ProfileDetail = ({navigation: {goBack}}) => {
  // const myState = useSelector(state => state.changeTheNumber);
  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);
  console.log('From Profile Screen', MyProfileInfo.myprofile.name);

  const MyClick = useSelector(state => state.UserClick);

  console.log(MyClick.userclickId);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mine, setMine] = useState([]);
  const [mineId, setMineId] = useState('');
  const [test, setTest] = useState(false);
  const [pending, SetPending] = useState([]);

  const FetchUserData = async () => {
    const token = await AsyncStorage.getItem('token');
    const fetchMYAPI = async () => {
      fetch(
        `http://13.232.252.51:5000/api/users/public/${MyClick.userclickId}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        },
      )
        .then(res => res.json())
        .then(data => {
          console.log('Not Mineeeeeeeeeeeeeeeeeeee');
          // console.log(data.user);
          data.map((item, index) => {
            console.log(item.PendingFriends);
            SetPending(item.PendingFriends);
          });
          console.log('Not Mineeeeeeeeeeeeeeeeeeee');
          setData(data);
          setLoading(false);
          // setRequestSent(data.RequestSent);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchMYAPI();
  };

  const FetchMineData = async () => {
    const token = await AsyncStorage.getItem('token');
    const fetchMYAPI = async () => {
      fetch(`http://13.232.252.51:5000/api/users/mine/me`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log('Mineeeeeeeeeeeeeeeeeeee');

          // data.map(e => {
          //   console.log(e.username);
          // });
          console.log(data.user);
          console.log('Mineeeeeeeeeeeeeeeeeeee');
          setMine(data);
          setMineId(data.user);
          // console.log(data);
          setLoading(false);
          // setRequestSent(data.RequestSent);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchMYAPI();
  };

  useEffect(() => {
    FetchUserData();
    FetchMineData();
  }, [MyClick.userclickId]);

  useEffect(() => {
    // var result = data.filter(function (o1) {
    //   return mine.some(function (o2) {
    //     return o1.id === o2.id; // return the ones with equal id
    //   });
    // });
  }, []);

  // const inventory = [
  //   {name: 'apples', quantity: 2},
  //   {name: 'bananas', quantity: 0},
  //   {name: 'cherries', quantity: 5},
  // ];

  const result = pending.find(({user}) => user === mineId);
  console.log('I am Result');
  console.log(result);
  console.log('I am Result');

  return (
    <SafeAreaView style={styles.container_main}>
      {loading ? (
        <View style={styles.containerLoader}>
          <ActivityIndicator size={50} color="#3E3C9C" />
        </View>
      ) : (
        <View style={styles.container_main}>
          {data
            // .filter(item=>{
            //   if(item.user==mineId){
            //     set
            //   }
            // })
            .map((item, index) => {
              return (
                <View style={styles.container_main} key={index}>
                  <View style={styles.profileheader}>
                    <TouchableRipple
                      onPress={() => {
                        goBack();
                      }}
                      rippleColor="rgba(0, 0, 0, .1)"
                      borderless
                      style={styles.backripple}>
                      <Ionicons
                        name="chevron-back"
                        size={30}
                        style={{color: '#000000'}}></Ionicons>
                    </TouchableRipple>

                    <View style={styles.profileheaderright}>
                      <TouchableRipple
                        onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .1)"
                        borderless
                        style={styles.profileheaderrighticon1ripple}>
                        <Ionicons
                          name="share-social-outline"
                          size={25}
                          style={styles.profileheaderrighticon1}></Ionicons>
                      </TouchableRipple>

                      {/* <Text>{myState}</Text> */}
                      <TouchableRipple
                        onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .1)"
                        borderless
                        style={styles.profileheaderrighticon2ripple}>
                        <Entypo
                          name="dots-three-vertical"
                          size={20}
                          style={styles.profileheaderrighticon2}></Entypo>
                      </TouchableRipple>
                    </View>
                  </View>

                  <View style={styles.profileline}>
                    <View style={styles.profile}>
                      <Image
                        style={styles.profileimage}
                        source={require('../assets/images/myimg.jpeg')}></Image>
                    </View>

                    <View style={styles.btncontainer}>
                      {/* {addFriend ? ( */}
                      {result ? (
                        <Text
                          style={styles.btntxt1}
                          // onPress={(() => setAddFriend(!addFriend), clickevents)}
                          // onPress={(() => removerequest(), setAddFriend(!addFriend))}
                          // onPress={removefriend}
                        >
                          Requested
                        </Text>
                      ) : (
                        <Text
                          style={styles.btntxt}
                          // onPress={(() => removerequest, setAddFriend(!addFriend))}
                          // onPress={(() => clickevents(), setAddFriend(!addFriend))}
                          // onPress={addfriend}
                        >
                          Add Friend
                        </Text>
                      )}
                    </View>
                  </View>

                  <View style={styles.nameline}>
                    <Text style={styles.textname}>{item.name}</Text>
                    <Text style={styles.textusername}>@{item.username}</Text>
                  </View>

                  <View style={styles.followline}>
                    <Text style={styles.friendstxt}>
                      Friends {item.Friends.length}
                    </Text>
                    <Text style={styles.text4}>{item.RequestSent.length}</Text>
                  </View>

                  <View style={styles.bio}>
                    <Text style={styles.biotxt}>
                      Build anything from console widgets to mobile
                      applications, with our free and easy to use API. We
                      provide data on current global outbreaks, including
                      COVID-19 and Influenza.
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileDetail;

const P100 = '100%';
const styles = StyleSheet.create({
  container_main: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
  },

  profileheader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FFFF',
    flex: 0.09,
    color: '#000000',
  },
  profileheaderright: {
    display: 'flex',
    flexDirection: 'row',
    color: '#000000',
  },
  profileheaderrighticon2: {
    // marginRight: 20,
    color: '#000000',
  },
  profileheaderrighticon1: {
    // marginRight: 30,
    color: '#000000',
  },
  profileline: {
    // flex: 0.18,
    height: 150,
    // backgroundColor: '#808080',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 45,
    backgroundColor: '#FFFF',
    marginLeft: 20,
  },
  profileimage: {
    width: 100,
    height: 100,
    borderRadius: 45,
    zIndex: -1,
  },

  nameline: {
    flex: 0.1,
    justifyContent: 'center',
  },
  textname: {
    marginLeft: 25,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  textusername: {
    marginLeft: 25,
    fontSize: 12,
    // paddingTop: 3,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  followline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    flex: 0.08,
  },
  friendstxt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    marginLeft: 2,
  },
  text3: {},
  text4: {
    // fontWeight: "700",
    marginLeft: 20,
  },
  bioline: {
    backgroundColor: '#FFFF',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center',
    flex: 0.05,
  },
  biotxt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    marginLeft: 25,
    fontSize: 11,
    paddingRight: 20,
  },
  text5: {
    color: '#728FCE',
  },
  socialline: {
    display: 'flex',
    flexDirection: 'row',

    // backgroundColor: "#FFFF",
    paddingLeft: 25,
    alignItems: 'center',
  },
  profileheaderrighticon2ripple: {
    marginRight: 15,
    // padding: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileheaderrighticon1ripple: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginRight: 10,
    borderRadius: 50,
  },
  backripple: {
    padding: 7,
    borderRadius: 30,
  },
  containerLoader: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  btntxt: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFFF',
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    borderRadius: 20,
  },
  btntxt1: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#1A4493',
    color: '#FFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    borderRadius: 20,
  },
  btncontainer: {
    // marginRight: 20,
    // width: 100,
    marginLeft: 30,
    marginTop: 60,
  },
});
