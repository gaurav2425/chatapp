import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import Loader from 'react-native-mask-loader';
const FriendRequests = ({name, username, clickevents, removerequest}) => {
  const [addFriend, setAddFriend] = useState(false);

  const [token, setToken] = useState('');

  const [data, setData] = useState([]);

  const [userId, setUserId] = useState('');

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
            source={require('../assets/images/vk.jpg')}
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          //   backgroundColor: '#F65F65',
        }}>
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
              Confirm
            </Text>
          )}
        </View>

        <View style={styles.btncontainer}>
          <Text
            style={styles.btntxtdel}
            // onPress={(() => removerequest, setAddFriend(!addFriend))}
            // onPress={(() => clickevents(), setAddFriend(!addFriend))}
            onPress={addfriend}>
            Delete
          </Text>
        </View>
        {/* <OrientationLoadingOverlay
          visible={true}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          // message="Loading... 😀😀😀"
        /> */}
        {/* <Loader
          // isLoaded={this.state.appHasLoaded}
          isLoaded={true}
          imageSource={require('../assets/images/punk8033.png')}
          backgroundStyle={styles.loadingBackgroundStyle}></Loader> */}
      </View>
    </View>
  );
};

export default FriendRequests;

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
    borderRadius: 15,
  },
  btntxtdel: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FF4141',
    color: '#FFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    borderRadius: 15,
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
    borderRadius: 0,
  },
  btncontainer: {
    marginRight: 10,
  },

  imagecontainer: {
    width: 55,
    height: 55,
    // backgroundColor: '#0000',
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
