import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ExploreChat from '../components/ExploreChat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
const Explore = ({navigation: {goBack}}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [username, setUsername] = useState([]);
  const [userId, setUserId] = useState([]);
  const [mine, setMine] = useState();
  const [clickuserId, setClickUserId] = useState(null);
  const [clicknewuserId, setClicknewUserId] = useState('');
  const [token, setToken] = useState('');
  const [myFriends, setMyFriends] = useState();

  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);

  const tokenmain = AsyncStorage.getItem('token');

  const fetchtoken = async () => {
    const token1 = await AsyncStorage.getItem('token');
    setToken(token1);
  };
  useEffect(() => {
    fetchtoken();
  }, []);

  const sendCredentials = () => {
    const fetchMYAPI = async () => {
      fetch('http://192.168.1.7:5000/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      })
        .then(res => res.json())
        .then((data, index) => {
          // console.log(data);
          setData(data, index);
          // setUsername(data.username);
          // setName(data.name);

          // console.log(data._id);
          // console.log(data.name);
          data.map((items, index) => {
            // setName(data.name);
            setName(items.name);
            setUsername(items.username);
            setUserId(items._id, index);
            console.log(items._id);
            // console.log(items._id);
          });
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI();
  };

  const fetchMyApi = () => {
    const fetchMYAPI = async () => {
      fetch('http://192.168.1.7:5000/api/users/myfriends/all', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      })
        .then(res => res.json())
        .then((data, index) => {
          setMyFriends(data);

          data.map((items, index) => {
            setName(items.name);
            setUsername(items.username);
            setUserId(items._id, index);
            console.log(items._id);
          });
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI();
  };
  console.log('My Friends');
  console.log(myFriends);
  console.log('My Friends');

  console.log('From Explore Screen', MyProfileInfo.data.name);

  const fetchMe = async () => {
    const token = await AsyncStorage.getItem('token');
    const fetchMYAPI = async () => {
      fetch('http://192.168.1.7:5000/api/users/mine/profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': MyProfileInfo.token,
        },
      })
        .then(res => res.json())
        .then((data, index) => {
          setMine(data);
          // console.log('MINE DATA');
          console.log(data);
          // console.log('MINE DATA');
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI();
  };

  console.log('Token From Reducer');
  console.log('Token From Reducer');
  console.log('Token From Reducer');

  console.log(MyProfileInfo.data.name);
  console.log(MyProfileInfo.data.token);
  console.log(MyProfileInfo.data.token);
  console.log('Token From Reducer');
  console.log('Token From Reducer');
  console.log('Token From Reducer');

  useEffect(() => {
    fetchtoken();
    sendCredentials();
    fetchMyApi();
    fetchMe();
    // data.map((item, index) => console.log('This is from use effect', item._id));
  }, []);
  // console.log(userId);

  const sendFriendRequest = iddd => {
    const fetchMYAPI = async iddd => {
      await fetch(
        `http://192.168.1.7:5000/api/users/${iddd}/addfriendrequest`,
        {
          method: 'POST',
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/json',
          //   'x-auth-token': token,
          // },
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token,
          }),
        },
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // setData(data);
          // setUsername(data.username);
          // setName(data.name);
          // console.log(userId);
        })

        // .then(data.map((idata, index) => setClickUserId(idata._id)))
        .catch(err => {
          console.log(err);
          throw err;
        });
      // console.log('This is click', clickuserId);
    };
    fetchMYAPI(iddd);
  };

  const cancelFriendRequest = iddd => {
    const fetchMYAPI = async iddd => {
      await fetch(
        `http://192.168.1.7:5000/api/users/${iddd}/removefriendrequest`,
        {
          method: 'POST',
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/json',
          //   'x-auth-token': token,
          // },
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token,
          }),
        },
      )
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          console.log('Friend Request removed');
          // setData(data);
          // setUsername(data.username);
          // setName(data.name);
          // console.log(userId);
        })

        // .then(data.map((idata, index) => setClickUserId(idata._id)))
        .catch(err => {
          console.log(err);
          throw err;
        });
      // console.log('This is click', clickuserId);
    };
    fetchMYAPI(iddd);
  };

  console.log('MINE________________MINE');
  console.log(mine);
  console.log('MINE________________MINE');

  console.log('From Explore Screen', MyProfileInfo.token);
  console.log('Iam Mine ', mine);
  return (
    <View style={styles.explorecontainer}>
      <View style={styles.explorecontainerheader}>
        <Ionicons
          name="chevron-back-sharp"
          size={30}
          style={styles.icon1}
          onPress={() => {
            goBack();
          }}></Ionicons>
        <Text style={styles.txt}>Explore People</Text>
      </View>

      <ScrollView>
        <View>
          <Text style={styles.txt1}>PEOPLE TO FOLLOW</Text>
        </View>
        {data
          // .filter(item => {
          //   if (item === mine) {
          //     console.log('FOundFOundFOundFOundFOundFOundFOundFOundFOundFOund');
          //     return null;
          //     console.log('FOundFOundFOundFOundFOundFOundFOundFOundFOundFOund');
          //   } else {
          //     return item;
          //   }
          // })
          // .splice(mine)
          .map((item, index) => (
            <ExploreChat
              name={item.name}
              username={item.username}
              key={index}
              clickevents={() => {
                // sendFriendRequest();
                // setClickUserId(item._id);
                let iddd = item._id;
                console.log(item._id);
                sendFriendRequest(iddd);
              }}
              removerequest={() => {
                let iddd = item._id;
                console.log(item._id);
                cancelFriendRequest(iddd);
              }}></ExploreChat>
            // <Text
            //   style={{height: 50, backgroundColor: '#F65F66'}}
            //   key={index}
            //   onPress={async () => {
            //     await setClickUserId(item._id);
            //     let iddd = item._id;
            //     console.log(item._id);
            //     sendFriendRequest(iddd);
            //   }}>
            //   {item.name}
            //   {item._id}
            // </Text>
          ))}
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explorecontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
  },
  icon1: {
    color: '#000000',
    marginLeft: 15,
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 18,
    marginLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  txt1: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 13,
    marginLeft: 25,
    paddingTop: 5,
    paddingBottom: 5,
  },
  explorecontainerheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#FFFF',
    height: 60,
  },
});

<View>
  {/* return(
    {
    data.map((item)=>{
        <ExploreChat name={item.name} username={item.username}></ExploreChat>
               }
            }
)
 */}
</View>;
