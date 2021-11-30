import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ExploreChat = ({name, username, clickevents, removerequest}) => {
  const [addFriend, setAddFriend] = useState(false);

  const [token, setToken] = useState('');

  const [data, setData] = useState([]);

  const [userId, setUserId] = useState('');

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

  // const sendFriendRequest = () => {
  //   const fetchMYAPI = async () => {
  //     fetch('http://192.168.1.7:5000/api/auth', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(async data => {
  //         console.log(data);

  //         try {
  //           await AsyncStorage.setItem('token', data.token);
  //           navigation.replace('home');
  //         } catch (e) {
  //           //saving error
  //           console.log('Error hai', e);
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   fetchMYAPI();
  // };

  // const sendFriendRequest = () => {
  //   const fetchMYAPI = async () => {
  //     fetch(`http://192.168.1.7:5000/api/users/${userId}/addfriend`, {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'x-auth-token': token,
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         setData(data);
  //         setUsername(data.username);
  //         setName(data.name);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   fetchMYAPI();
  // };

  // useEffect(() => {
  //   sendFriendRequest();
  // }, []);

  const addfriend = () => {
    setAddFriend(!addFriend);
    clickevents();
  };

  const removefriend = () => {
    setAddFriend(!addFriend);
    removerequest();
  };

  const cancelrequest = () => {
    console.log('Request Cancelled');
  };
  return (
    <View style={styles.chatcontainer}>
      <View style={styles.chatcontainerleft}>
        <View style={styles.imagecontainer}>
          <Image
            source={require('../assets/images/punk8033.png')}
            style={styles.image}></Image>
        </View>
        <View style={styles.txtcontainer}>
          <View style={styles.txtcontainerpart1}>
            <Text style={styles.txt}>{name}</Text>
            {/* <MaterialIcons
            name="verified"
            style={styles.verifyicon}></MaterialIcons> */}
          </View>
          <View style={styles.txtcontainerpart2}>
            <Text style={styles.txt1}>@{username}</Text>
          </View>
        </View>
      </View>
      <View style={styles.btncontainer}>
        {addFriend ? (
          <Text
            style={styles.btntxt1}
            // onPress={(() => setAddFriend(!addFriend), clickevents)}
            // onPress={(() => removerequest(), setAddFriend(!addFriend))}
            onPress={removefriend}>
            Requested
          </Text>
        ) : (
          <Text
            style={styles.btntxt}
            // onPress={(() => removerequest, setAddFriend(!addFriend))}
            // onPress={(() => clickevents(), setAddFriend(!addFriend))}
            onPress={addfriend}>
            Add Friend
          </Text>
        )}
      </View>
    </View>
  );
};

export default ExploreChat;

const width = '70%';
// const txtwidth = "79%";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  chatcontainer: {
    height: 70,
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: "#FFFF",
    backgroundColor: '#FAF5EF',
    // backgroundColor: '#606060',
    justifyContent: 'space-between',

    marginTop: 1,
    alignItems: 'center',
  },
  chatcontainerleft: {
    height: 70,
    // width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: "#FFFF",
    backgroundColor: '#FAF5EF',
    // backgroundColor: '#606060',
    // justifyContent: 'space-between',

    marginTop: 1,
    alignItems: 'center',
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
    marginRight: 20,
  },

  imagecontainer: {
    width: 55,
    height: 55,
    backgroundColor: '#F65F65',
    borderRadius: 40,
    marginLeft: 15,
  },
  txt: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    // left: 10,
    fontSize: 15,
    marginTop: 2,
    // fontWeight: "700",
    letterSpacing: 0.2,
    color: '#000000',
    // fontFamily: 'Poppins-BlackItalic',
    fontFamily: 'Poppins-Bold',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 25,
  },
  txtcontainer: {
    height: 70,
    // width: txtwidth,
    // borderBottomWidth: 1,
    // borderBottomColor: "#FFE4E1",
    // backgroundColor: "#FFE4E1",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  txt1: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    left: 10,
    marginTop: -3,
    fontSize: 11,
    // marginTop: 0,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  txttime: {
    color: '#708090',
  },
  txtcontainer1: {
    position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#708090',
  },
  txt2: {
    fontSize: 10,
    color: '#FF69B4',
  },
  msgnotification: {
    width: 20,
    height: 20,
    backgroundColor: '#FF69B4',
    backgroundColor: '#FFE4E1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  txt3: {
    color: '#000000',
    backgroundColor: '#FFFF',
    fontSize: 10,
  },
  txtcontainerpart1: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FF69B4',
    // alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  verifyicon: {
    left: 5,
    color: '#32CD32',
    marginTop: 7,
  },
});
