import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
const ExploreChat = ({
  name,
  username,
  myusername,
  clickevents,
  removerequest,
  // userclickId,
  // newuserclickId,
  exploreusers,
}) => {
  const [results, setResults] = useState([]);
  const [addFriend, setAddFriend] = useState(true);
  const [removeFriend, setRemoveFriend] = useState(false);

  const [token, setToken] = useState('');

  const [data, setData] = useState([]);

  const [userId, setUserId] = useState('');
  const [requestsent, setRequestSent] = useState([]);

  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);
  // console.log('I am From chattter');
  // console.log('I am From chattter');
  // console.log('I am From chattter');
  // console.log(MyProfileInfo.data.RequestSent);
  // console.log('I am From chattter');
  // console.log('I am From chattter');
  // console.log('I am From chattter');

  // const MyClick = useSelector(state => state.UserClick);

  // console.log(MyClick.userclickId);
  // let x = data;
  let x = MyProfileInfo.myprofile.RequestSent;
  // let y = MyProfileInfo.data;

  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log(x);

  // function findArrayElementByTitle(array, title) {
  //   return array.find(element => {
  //     return element;
  //   });
  // }

  // findArrayElementByTitle(x, 'rohan');

  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log(y);

  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');

  // function findArrayElementByTitle(array, username) {
  //   return array.find(element => {
  //     return element.username === username;
  //   });
  // }
  // findArrayElementByTitle(x, 'rohan');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // console.log('Testing 123456789');
  // Use map to get a simple array of "val" values. Ex: [1,4]

  // let yFilter = y.map(itemY => {
  //   return itemY.username;
  // });
  // console.log('I am From X chattter');
  // console.log(xFilter);
  // console.log('I am From X chattter');
  // console.log(yFilter);
  // let zFilter = z.map(itemZ => {
  //   return itemZ;
  // });

  // Use filter and "not" includes to filter the full dataset by the filter dataset's val.
  // let filteredX = x.filter(
  //   itemX => !yFilter.includes(itemX.username) && z.username != itemX.username,
  // );

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

  let arrName = name.split(' ');

  // Select the first letter of the name
  let iniName = name.charAt(0).toUpperCase();

  // Select the first letter of the lastname
  let iniLname = arrName[arrName.length - 1].charAt(0).toUpperCase();

  const FetchMineData = async () => {
    const token = await AsyncStorage.getItem('token');
    const fetchMYAPI = async () => {
      fetch(`http://192.168.1.7:5000/api/users/mine/me`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      })
        .then(res => res.json())
        .then(async data => {
          console.log(data);
          await setData(data);
          await setRequestSent(data.RequestSent);

          console.log('sent Requests');
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchMYAPI();
  };

  useEffect(() => {
    fetchtoken();
    FetchMineData();
  }, []);
  const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
  ];

  // useEffect(() => {
  const result = requestsent.find(({user}) => user === exploreusers);

  console.log('I am a very New  Result');
  console.log('I am a very New  Result');
  console.log('I am a very New  Result');
  console.log(result);
  console.log('I am a very  New  Result');
  console.log('I am a very New  Result');
  console.log('I am a very New  Result');
  // }, []);

  // const result = requestsent.find(({user}) => user === exploreusers);
  console.log('________________________');
  console.log('I am a very New  Result ki');
  console.log('I am a very New  Result ki');
  console.log(requestsent);
  console.log('I am a very New  Result ki');
  console.log('I am a very New  Result ki');
  console.log('_______________________');
  const addfriend = () => {
    setAddFriend(!addFriend);
    clickevents();
  };

  const removefriend = () => {
    setAddFriend(!addFriend);
    removerequest();
  };

  // console.log('Request Sent');
  // console.log(data.RequestSent);
  // console.log('Request Sent');
  // console.log(data);
  // console.log(data);
  const cancelrequest = () => {
    console.log('Request Cancelled');
  };

  // const inventory = [
  //   {name: 'apples', quantity: 2},
  //   {name: 'bananas', quantity: 0},
  //   {name: 'cherries', quantity: 5},
  // ];

  // {requestsent.map(item,index)=>{

  // }}

  // const results = requestsent.find(username => username === myusername);
  // console.log('results');
  // console.log(results); // { name: 'cherries', quantity: 5 }
  // console.log('results');

  // const inventory = [
  //   {name: 'apples', quantity: 2},
  //   {name: 'bananas', quantity: 0},
  //   {name: 'cherries', quantity: 5},
  // ];

  // const result = inventory.find(({name}) => name === 'cherries');

  // console.log(result); // { name: 'cherries', quantity: 5 }

  return (
    <View style={styles.chatcontainer}>
      <View style={styles.chatcontainerleft}>
        <View style={styles.imagecontainer}>
          <Image
            source={{
              uri: 'https://img.seadn.io/files/53ffe6133524547032288e5effe4d12a.png?fit=max&w=600',
            }}
            style={styles.image}></Image>

          {/* {name.indexOf(' ') >= 0 ? (
            <Text style={styles.txtavatar}>
              {iniName}
              {iniLname}
            </Text>
          ) : (
            <Text style={styles.txtavatar}>{iniName}</Text>
          )} */}

          {/* <Text style={styles.txtavatar}>GB</Text> */}
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

      {/* {requestsent.map((item, index) => {
        return <Text>{item.username}</Text>;
      })} */}
      <View style={styles.btncontainer}>
        {result ? (
          // <Text style={styles.btntxt1} onPress={removefriend}>
          //   Requested
          // </Text>
          <View>
            {addFriend ? (
              <Text
                style={styles.btntxt1}
                // onPress={(() => removerequest, setAddFriend(!addFriend))}
                // onPress={(() => clickevents(), setAddFriend(!addFriend))}
                onPress={removefriend}>
                Requested
              </Text>
            ) : (
              <Text
                style={styles.btntxt}
                // onPress={(() => removerequest, setAddFriend(!addFriend))}
                // onPress={(() => clickevents(), setAddFriend(!addFriend))}
                onPress={addfriend}>
                Follow
              </Text>
            )}
          </View>
        ) : (
          <View>
            {addFriend ? (
              <Text
                style={styles.btntxt}
                // onPress={(() => removerequest, setAddFriend(!addFriend))}
                // onPress={(() => clickevents(), setAddFriend(!addFriend))}
                onPress={addfriend}>
                Follow
              </Text>
            ) : (
              <Text
                style={styles.btntxt1}
                // onPress={(() => removerequest, setAddFriend(!addFriend))}
                // onPress={(() => clickevents(), setAddFriend(!addFriend))}
                onPress={removefriend}>
                Requested
              </Text>
            )}
          </View>
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
    // paddingLeft: 10,
    // paddingRight: 10,
    width: 80,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    backgroundColor: '#0096FF',
    // 0096FF
    // 4682B4
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 12.5,
    borderRadius: 12,
    textAlign: 'center',
  },
  btntxt1: {
    // paddingLeft: 10,
    // paddingRight: 10,
    width: 90,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: '#87CEEB',
    color: '#FFFFFF',
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
    backgroundColor: '#F3EBE0',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 15,
    justifyContent: 'center',
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
    borderRadius: 35,
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
    color: '#696969',
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
  txtavatar: {
    fontFamily: 'Poppins-Medium',
    color: '#101010',
    fontSize: 20,
  },
});
