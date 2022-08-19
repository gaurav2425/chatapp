import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import ExploreChat from '../components/ExploreChat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableRipple} from 'react-native-paper';
import {UserClickAction} from '../actions/UserClick';

const Explore = ({navigation: {goBack}, navigation}) => {
  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [username, setUsername] = useState([]);
  const [userId, setUserId] = useState([]);
  const [mine, setMine] = useState([]);
  const [minenew, setMineNew] = useState([]);
  const [newmine, setNewMineData] = useState([]);
  const [clickuserId, setClickUserId] = useState(null);
  const [clicknewuserId, setClicknewUserId] = useState('');
  const [token, setToken] = useState('');
  const [myFriends, setMyFriends] = useState();
  const [requestsent, setRequestSent] = useState(false);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const tokenmain = AsyncStorage.getItem('token');
  const MyClick = useSelector(state => state.UserClick);
  console.log(MyClick);

  const fetchtoken = async () => {
    const token1 = await AsyncStorage.getItem('token');
    setToken(token1);
  };
  useEffect(() => {
    fetchtoken();
  }, []);

  const sendCredentials = () => {
    const fetchMYAPI = async () => {
      fetch('http://13.232.252.51:5000/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log('Data From Real Api');
          console.log('Data From Real Api');
          console.log('Data From Real Api');
          console.log('Data From Real Api');
          console.log('Data From Real Api');
          console.log('Data From Real Api');
          setData(data);
          console.log(data);

          // data.map((items, index) => {
          //   setName(items.name);
          //   setUsername(items.username);
          //   setUserId(items._id, index);
          //   console.log(items._id);
          //   setLoading(false);
          // });
          // setLoading(false);
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI();
  };

  const FetchMinemeData = async () => {
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
          console.log(data);
          setNewMineData(data);
          // setRequestSent(data.RequestSent);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchMYAPI();
  };

  useEffect(() => {
    FetchMinemeData();
  }, []);

  const FetchMineData = () => {
    const fetchMYAPI = async () => {
      fetch('http://13.232.252.51:5000/api/users/mine/me', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log('Data From Real Api');
          console.log('Data From Real Api');
          // setData(data);
          setMineNew(data);
          // console.log(data);
          console.log('Data From Real Api');
          console.log('Data From Real Api');
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
      fetch('http://13.232.252.51:5000/api/users/myfriends/all', {
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
          console.log('MY all Friends');
          console.log(data);
          console.log('MY all Friends');
          // data.map((items, index) => {
          //   setName(items.name);
          //   setUsername(items.username);
          //   setUserId(items._id, index);
          //   console.log(items._id);
          // });
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI();
  };
  // console.log('My Friends');
  // console.log(myFriends);
  // console.log('My Friends');

  // console.log('From Explore Screen Mine', MyProfileInfo.data.RequestSent);
  // console.log('From Explore Screen Mine', MyProfileInfo.data.RequestSent);
  // console.log('From Explore Screen Mine', MyProfileInfo.data.RequestSent);
  // console.log('From Explore Screen Mine', MyProfileInfo.data.RequestSent);
  // console.log('From Explore Screen Mine', MyProfileInfo.data.RequestSent);

  // var arr1 = MyProfileInfo.data.Friends;
  // var arr2 = data;
  // console.log('Array 1');
  // console.log(arr1);
  // console.log('Array 1');
  // console.log('Array 2');
  // console.log(arr2);
  // console.log('Array 2');

  // const res = arr2.filter(item => !arr1.includes(item));
  // console.log('Response Data');
  // console.log(res);
  // console.log('Response Data');

  const fetchMe = async () => {
    const token = await AsyncStorage.getItem('token');
    const fetchMYAPI = async () => {
      fetch('http://13.232.252.51:5000/api/users/mine/profile', {
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
          console.log(data);
          setLoading(false);
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

  console.log(MyProfileInfo.myprofile.name);
  console.log(MyProfileInfo.myprofile.Friends);
  console.log(MyProfileInfo.myprofile.token);
  console.log(MyProfileInfo.myprofile.RequestSent);
  console.log('Token From Reducer');
  console.log('Token From Reducer');
  console.log('Token From Reducer');

  useEffect(() => {
    fetchtoken();
    sendCredentials();
    fetchMyApi();
    fetchMe();
    FetchMineData();
  }, [MyProfileInfo.myprofile]);

  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log(newmine);
  // console.log(newmine.RequestSent);
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');
  // console.log('Data From Real Api');

  const sendFriendRequest = iddd => {
    const fetchMYAPI = async iddd => {
      await fetch(
        `http://13.232.252.51:5000/api/users/${iddd}/addfriendrequest`,
        {
          method: 'POST',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token,
          }),
        },
      )
        .catch(err => {
          console.log(err);
          throw err;
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    };
    fetchMYAPI(iddd);
  };

  const cancelFriendRequest = creq => {
    const fetchMYAPI = async creq => {
      await fetch(
        `http://13.232.252.51:5000/api/users/${creq}/cancelfriendrequest`,
        {
          method: 'POST',

          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token,
          }),
        },
      )
        .then(res => res.json())
        .then(data => {
          console.log('Friend Request removed');
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    };
    fetchMYAPI(creq);
  };

  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log(mine);
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');
  // console.log('MINE________________MINE');

  // console.log('From Explore Screen', MyProfileInfo.data.Notifications);
  // console.log('From Explore Screen', MyProfileInfo.data.RequestSent);
  // console.log('From Explore Screen', MyProfileInfo.data.RequestSent);
  // console.log('From Explore Screen', MyProfileInfo.data.RequestSent);
  // console.log('From Explore Screen', MyProfileInfo.data.RequestSent);
  // console.log('Iam Mine ', mine);

  let x = data;
  let y = MyProfileInfo.myprofile.Friends;
  let z = MyProfileInfo.myprofile;
  // let A = newmine.RequestSent;
  // console.log(A);

  // Use map to get a simple array of "val" values. Ex: [1,4]
  // let aFilter = A.map(itemX => {
  //   return itemX.username;
  // });

  // console.log('A Filter');
  // console.log('A Filter');
  // console.log('A Filter');
  // console.log('A Filter');
  // // console.log(aFilter);
  // console.log('A Filter');
  // console.log('A Filter');
  // console.log('A Filter');
  // console.log('A Filter');

  let yFilter = y.map(itemY => {
    return itemY.username;
  });

  // let aFilter = A.map(itemA => {
  //   return itemA.username;
  // });

  // console.log(aFilter);
  // let zFilter = z.map(itemZ => {
  //   return itemZ;
  // });

  // {
  //   A.map((element, index) => {
  //     if (element.username == username) {
  //       console.log(element.username == username);
  //       return (
  //         <Text
  //           key={index}
  //           style={styles.btntxt1}
  //           // onPress={(() => setAddFriend(!addFriend), clickevents)}
  //           // onPress={(() => removerequest(), setAddFriend(!addFriend))}
  //           onPress={removefriend}>
  //           Requested
  //         </Text>
  //       );
  //     } else {
  //       // return <Text key={index}>Not Found {username}</Text>;
  //       return null;
  //     }
  //   });
  // }

  // Use filter and "not" includes to filter the full dataset by the filter dataset's val.
  let filteredX = x.filter(
    itemX => !yFilter.includes(itemX.username) && z.username != itemX.username,
  );

  // let filteredA = A.filter(
  //   item => !yFilter.includes(itemX.username) && z.username != itemX.username,
  // );

  // console.log('a Filter');
  // console.log('a Filter');
  // console.log(aFilter);
  // console.log('a Filter');
  // console.log('a Filter');

  // let reqsent = MyProfileInfo.data.RequestSent.map(itemReq => {
  //   return itemReq.username;
  // });

  // let reqnotsent = filteredX.map(itemReq => {
  //   return itemReq.username;
  // });

  // console.log(reqnotsent);

  // console.log(reqsent);

  // Print the result.
  // console.log('Response Data');
  // console.log('Response Data');
  // console.log('Response Data');
  // console.log('Response Data');
  // console.log(res);
  // console.log('Response Data');
  // console.log(filteredX);

  // console.log(yFilter);
  // console.log('Response Mine');
  // console.log('Response Mine');
  // console.log(z);
  // // console.log(zFilter);
  // console.log('Response Mine');
  // console.log('Response Mine');
  // console.log('Response Data');
  // console.log('Response Data');

  return (
    <View style={styles.explorecontainer}>
      <View style={styles.explorecontainerheader}>
        <TouchableRipple
          onPress={() => {
            goBack();
          }}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          // style={{marginLeft: 25}}
          style={styles.rippleexploreback}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            style={styles.icon1}></Ionicons>
        </TouchableRipple>

        <Text style={styles.txt}>Explore People</Text>
      </View>

      {loading ? (
        <View style={styles.exploreloadercontainer}>
          <ActivityIndicator size={50} color="#3E3C9C"></ActivityIndicator>
        </View>
      ) : (
        <ScrollView>
          <View>
            <Text style={styles.txt1}>PEOPLE TO FOLLOW</Text>
          </View>

          {filteredX.map((item, index) => (
            <TouchableRipple
              onPress={() => {
                navigation.navigate('profiledetail');
                // console.log(item);
                let userclickId = item.user;

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
                name={item.name}
                username={item.username}
                myusername={item.username}
                exploreusers={item.user}
                clickevents={() => {
                  let iddd = item.user;
                  console.log('I am id from explore chat');
                  console.log('I am id from explore chat');
                  console.log('I am id from explore chat');
                  console.log(iddd);
                  console.log('I am id from explore chat');
                  console.log('I am id from explore chat');
                  console.log('I am id from explore chat');
                  sendFriendRequest(iddd);
                }}
                removerequest={() => {
                  let creq = item.user;
                  console.log('I am id from explore chat');
                  console.log('I am id from explore chat');
                  console.log(item.user);
                  console.log('I am id from explore chat');
                  console.log('I am id from explore chat');
                  cancelFriendRequest(creq);
                }}></ExploreChat>
            </TouchableRipple>
          ))}
        </ScrollView>
      )}
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
    // marginLeft: 15,
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 18,
    marginLeft: 13,
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
  rippleexploreback: {
    padding: 10,
    marginLeft: 5,
    borderRadius: 30,
  },
  exploreloadercontainer: {
    flex: 1,
    justifyContent: 'center',
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
