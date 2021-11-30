import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExploreChat from '../components/ExploreChat';
import AddFriendChat from '../components/AddFriendChat';
import AsyncStorage from '@react-native-async-storage/async-storage';
const FriendRequests = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const fetchtoken = async () => {
    const token1 = await AsyncStorage.getItem('token');
    setToken(token1);
    console.log(token1);
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
  // console.log(token);

  const sendCredentials = async () => {
    const tokenL = await AsyncStorage.getItem('token');
    const fetchMYAPI = async tokenL => {
      fetch('http://192.168.1.7:5000/api/users/request/myrequests/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': tokenL,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log('_______________');
          console.log(data);
          console.log(data);
          console.log('_______________');
          setData(data);
          // setUsername(data.username);
          // setName(data.name);
        })
        .catch(err => {
          console.log(err);
          throw error;
        });
    };
    fetchMYAPI(tokenL);
  };

  useEffect(() => {
    sendCredentials();
  }, []);

  return (
    <View style={styles.explorecontainer}>
      <View>
        <Text style={styles.txt}>Requests Pending</Text>
      </View>
      {/* <Text>{data}</Text> */}
      {data.map((item, index) => (
        <AddFriendChat
          name={item.name}
          username={item.username}
          key={index}></AddFriendChat>
        // <Text key={index}>{item.name}</Text>
      ))}
      {/* <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text> */}
    </View>
  );
};

export default FriendRequests;

const styles = StyleSheet.create({
  explorecontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
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
