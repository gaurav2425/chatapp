import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExploreChat from '../components/ExploreChat';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Explore = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [username, setUsername] = useState([]);
  const [userId, setUserId] = useState([]);
  const [clickuserId, setClickUserId] = useState(null);
  const [clicknewuserId, setClicknewUserId] = useState('');
  const [token, setToken] = useState('');

  const fetchtoken = async () => {
    const token1 = await AsyncStorage.getItem('token');
    setToken(token1);
    // fetch('http://192.168.1.7:5000/api/auth', {
    //   headers: new Headers({
    //     'x-auth-token': token,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     settokenData(data);
    //   });
  };
  useEffect(() => {
    fetchtoken();
  }, []);

  // const btnpressed = async () => {
  //   // setClickUserId(item._id);
  //   await setClickUserId(item._id);
  //   sendFriendRequest();
  //   console.log(item._id);
  // };

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

  useEffect(() => {
    fetchtoken();
    sendCredentials();
    data.map((item, index) => console.log('This is from use effect', item._id));
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
        });
      // console.log('This is click', clickuserId);
    };
    fetchMYAPI(iddd);
  };

  // console.log(userId);
  // useEffect(() => {
  //   sendFriendRequest();
  // }, []);

  // console.log('_____________');
  // console.log(name);
  // console.log(item._id);
  return (
    <View style={styles.explorecontainer}>
      <View>
        <Text style={styles.txt}>Explore People</Text>
      </View>
      {data.map((item, index) => (
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
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explorecontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 18,
    marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
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
