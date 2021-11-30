import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import Message from '../components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import socketIO from 'socket.io-client';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import "./UserAgent";
// import { io } from "socket.io-client";
// import io from 'socket.io-client/dist/socket.io';
// import {Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
// import socketIo from 'socket.io-client';
import {Button} from 'react-native-paper';
import ChatInput from '../components/ChatInput';

const ChatScreen = ({navigation: {goBack}}) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [id, setId] = useState('');
  const scrollViewRef = useRef();
  const ENDPOINT = 'http://192.168.1.7:9000/';
  let socket = socketIO(ENDPOINT, {transports: ['websocket']});

  const sendCredentials = () => {
    const fetchMYAPI = async () => {
      fetch('http://192.168.1.7:9000/messages/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          received: false,
        }),
      })
        .then(res => res.json())
        .then(async data => {
          console.log(data);

          // try {
          //   await AsyncStorage.setItem('token', data.token);
          //   navigation.replace('home');
          // } catch (e) {
          //   //saving error
          //   console.log('Error hai', e);
          // }
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchMYAPI();
  };

  const send = e => {
    e.preventDefault();
    socket.emit('message', {message, id});
    setMessage('');
    console.log('here is msg');
    sendCredentials();
  };

  // var connectionOptions = {
  //   "force new connection": true,
  //   reconnectionAttempts: "Infinity",
  //   timeout: 10000,
  //   transports: ["websocket"],
  //   withCredentials: true,
  //   jsonp: true,
  // };
  // const socket = io.connect("http://localhost:3000");
  // const [message, setMessage] = useState("");
  // const [chat, setChat] = useState([]);
  // let socket;
  // const send = () => {
  //   const message = document.getElementById("chatInput").value;
  //   socket.emit("message", {});
  //   document.getElementById("chatInput").value == "";
  // };
  // const ENDPOINT = 'http://192.168.1.5:3000/';
  // let socket = socketIo(ENDPOINT, {
  //   transports: ['websocket'],
  //   jsonp: false,
  // });

  useEffect(() => {
    let socket = socketIO(ENDPOINT, {transports: ['websocket']});
    // socket.connect();
    socket.on('connect', () => {
      console.log('connected From Frontend Side');
      setId(socket.id);
      console.log(socket.id);
    });

    socket.emit('joined', () => {
      console.log('joined');
      alert('joined');
    });

    socket.emit('welcome', () => {
      console.log('welcome to the chat');
    });

    socket.on('message', () => {});
    // socket.on('welcome', () => {
    //   console.log('Welcome User To narayan chat');
    // });
    // socket.on('disconnected', () => {
    //   console.log(socket.id);
    //   socket.disconnect();
    //   socket.off();
    // });
    // socket.emit('forceDisconnect', () => {
    //   socket.disconnect();
    //   console.log('Disconnected Successfully');
    // });
    // socket.on("forceDisconnect", () => {
    //   console.log("Disconnected Successfully");
    // });
    return () => {
      socket.emit('forceDisconnect');
      socket.disconnect();
      // console.log(socket.id);
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on('sendMessage', data => {
      console.log(data.message, data.id);
      setChat([...chat, data.message]);
      console.log('This is Message Sent By User');
    });
    return () => {
      socket.off();
    };
  }, [chat]);

  // socket.on("connection", () => {
  //   console.log("connected");
  // });

  const sendChat = e => {
    e.preventDefault();
    // socket.emit('chat', {message});
    setMessage('');
    console.log('Pressed');
  };

  // socket.on("connection", () => {
  //   console.log("connected");
  // });

  // useEffect(() => {
  //   socket.on('chat', payload => {
  //     setChat([...chat, payload]);
  //     chat.push(payload);
  //     console.log('socket is active');
  //   });
  // setChat([...chat, message]);
  // socket.on("connection", () => {
  //   console.log("connected to socket from frontend");
  // });
  // });
  console.log(message);
  // console.log(chat);

  return (
    <View style={styles.containermain}>
      <View style={styles.chatscreenheader}>
        <View style={styles.chatscreenheaderleft}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            style={styles.icon1}
            onPress={() => {
              goBack();
            }}></Ionicons>
          <View style={styles.imagecontainer}>
            <Image
              source={require('.././assets/images/punk8033.png')}
              style={styles.image}></Image>
          </View>
          <View>
            <Text style={styles.name}>Vicky Kaushal</Text>
            <Text style={styles.status}>Online</Text>
          </View>
        </View>

        <View style={styles.chatscreenheaderright}>
          {/* <MaterialCommunityIcons
            name="phone-plus"
            size={25}
            style={styles.icon3}></MaterialCommunityIcons> */}
          <Entypo
            name="dots-three-vertical"
            size={20}
            style={styles.icon2}></Entypo>
        </View>
      </View>

      <View style={styles.chatsection}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          <View style={styles.chatmessagecontainer}>
            {chat.map((item, index) => {
              return (
                // <Text style={styles.chatmessage} key={index}>
                //   {payload.message}
                // </Text>
                <Message message={item} key={index} />
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* <View style={styles.chatinputmain}>
        <View style={styles.chatinput}>
          <View style={styles.chatinputleft}>
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={25}
              style={styles.inputicon1}></MaterialCommunityIcons>
          </View>
          <View style={styles.txtinputmain}>
            <TextInput
              placeholder="Type Something ...."
              style={styles.input}
              // autoFocus
              // value={message}
              value={message}
              // onChange={(e) => setMessage(e.target.value)}
              onChangeText={text => setMessage(text)}></TextInput>
          </View>
          <View style={styles.btn}>
            {message == '' ? (
              <View style={styles.iconsright}>
                <Entypo name="mic" size={20} style={styles.iconright1}></Entypo>
                <EvilIcons
                  name="camera"
                  size={30}
                  style={styles.iconright2}></EvilIcons>

                <Entypo
                  name="attachment"
                  size={20}
                  style={styles.iconright3}></Entypo>
              </View>
            ) : (
              <Ionicons
                name="ios-send-sharp"
                size={20}
                style={styles.btnsend}
                onPress={send}></Ionicons>
            )}
          </View>
        </View>
      </View> */}

      <View style={styles.chatinputmain}>
        {/* <ChatInput message send></ChatInput> */}

        <Entypo name="plus" size={20} style={styles.plusicon}></Entypo>

        <View style={styles.chatinput}>
          <View style={styles.chatinputnew}>
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={25}
              style={styles.inputicon1}></MaterialCommunityIcons>
            <TextInput
              placeholder="Type Something Here"
              style={styles.txtinputnew}
              multiline={true}
              value={message}
              onChangeText={text => setMessage(text)}></TextInput>
          </View>
          <View style={styles.chatinputrighticons}>
            {message ? (
              <Ionicons
                name="ios-send-sharp"
                size={20}
                style={styles.btnsend}
                onPress={send}></Ionicons>
            ) : (
              <EvilIcons
                name="camera"
                size={30}
                style={styles.iconright2}></EvilIcons>
            )}
          </View>
        </View>
      </View>

      <StatusBar backgroundColor="#F3EBE0" barStyle="dark-content" />
    </View>
  );
};

export default ChatScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const P90 = '90%';
const P80 = '80%';
const P70 = '70%';
const P75 = '75%';
const P100 = '100%';
const styles = StyleSheet.create({
  containermain: {
    backgroundColor: '#FAF5EF',
    backgroundColor: '#F8F6EC',
    flex: 1,
    flexDirection: 'column',
  },
  chatinputnew: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#FFFF',
    width: P80,
    borderRadius: 30,
    // justifyContent: 'center',
  },
  plusicon: {
    backgroundColor: '#000000',
    color: '#FFFF',
    padding: 10,
    borderRadius: 30,
    marginTop: 3,
    marginRight: 5,
  },

  chatinput: {
    display: 'flex',
    flexDirection: 'row',
    width: P80,
    // backgroundColor: '#FFFF',
    // backgroundColor: '#F3EBE0',
    backgroundColor: '#F3EBE0',
    // backgroundColor: '#F65F69',
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
    height: 45,
    marginTop: 3,
  },
  txtinputnew: {
    borderRadius: 30,
    width: P75,
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },

  chatinputmain: {
    // flex: 0.1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
    // backgroundColor: '#F65F99',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'none',
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },

  chatscreenheader: {
    // flex: 0.1,
    // backgroundColor: '#EEE8AA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: 5,
    // borderBottomWidth: 0.3,
    position: 'absolute',
    width: windowWidth,
    borderBottomColor: '#8B4513',
    backgroundColor: '#F8F6EC',
    height: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

    elevation: 1,
    backgroundColor: '#F3EBE0',
    // backgroundColor: '#EEE8AA',
  },
  chatsection: {
    flex: 1,

    // marginTop: 90,
    // backgroundColor: '#F65F96',
    paddingTop: 60,
  },

  imagecontainer: {
    width: 35,
    height: 35,
    marginLeft: 10,
    backgroundColor: '#F65F65',
    borderRadius: 15,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 15,
  },
  chatscreenheaderleft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatscreenheaderright: {
    marginTop: 25,
  },
  icon1: {
    marginLeft: 10,
    color: '#000000',
  },
  icon2: {
    marginRight: 25,
    color: '#000000',
  },
  chatscreenheaderright: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 25,
  },
  icon3: {
    marginRight: 15,
    color: '#000000',
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  status: {
    marginLeft: 13,
    fontSize: 10,
    marginTop: -5,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },

  inputicons: {
    display: 'flex',
    flexDirection: 'row',
  },
  chatinputleft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#696969',
    justifyContent: 'flex-start',
    marginRight: -40,
    zIndex: 1,
  },
  inputicon1: {
    marginLeft: 10,
    color: '#000000',
  },
  inputicon2: {
    marginRight: 10,
  },
  inputicon3: {
    marginRight: 10,
  },
  inputicon4: {
    marginRight: 10,
  },
  input: {
    // backgroundColor: "#000000",
    fontSize: 14,
    // marginLeft: 5,

    backgroundColor: '#F3EBE0',
    fontFamily: 'Poppins-Medium',
    backgroundColor: '#F65F65',
    minheight: 45,
    // width: P80,
    // width: 200,
    // maxWidth: 200,
    // minWidth: 200,
    width: P100,
  },
  txtinputmain: {
    // backgroundColor: '#FFFF',
    width: P100,
    borderRadius: 30,
    paddingRight: 40,
    paddingLeft: 40,
  },

  chatmessage: {
    padding: 6,
    // backgroundColor: "#2D8304",
    backgroundColor: '#41AC1C',
    borderRadius: 10,
    color: '#FFFF',
    marginTop: 2,
    maxWidth: 300,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: '300',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 5,
  },

  nametxt: {
    color: '#F8011F',
    fontSize: 13,
    fontWeight: 'bold',
  },
  msgtxt: {
    color: '#000000',
    marginTop: 2,
    // fontWeight: "bold",
    fontSize: 16,
  },
  btnsend: {
    // marginRight: 10,

    borderRadius: 50,
    padding: 7,
    paddingLeft: 10,
    // marginRight: 15,
    backgroundColor: '#000000',
    color: '#FFFF',
    marginRight: 10,
  },
  iconright2: {
    borderRadius: 50,
    padding: 5,
    // paddingLeft: 10,
    // marginRight: 15,
    backgroundColor: '#000000',
    color: '#FFFF',
    marginRight: 10,
  },
  btn: {
    backgroundColor: '#F69F69',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    // borderRadius: 50,
    marginLeft: -40,
    // opacity: 0.1,
  },
  iconsright: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -40,
    backgroundColor: '#F68F11',
    padding: 10,
  },
  iconright3: {
    // marginRight: 10,
    marginRight: 30,
    position: 'absolute',
  },
  iconright3: {
    // padding: 30,
  },
});

// chatmessagereceived: {
//   padding: 9,
//   backgroundColor: '#FFFF',
//   borderRadius: 10,
//   color: '#000000',
//   marginTop: 4,
//   maxWidth: 300,
//   paddingTop: 12,
//   paddingBottom: 12,
//   fontSize: 16,
// },
// chatmessagereceivedcontainer: {
//   padding: 9,
//   backgroundColor: '#FFFF',
//   borderRadius: 10,
//   color: '#000000',
//   marginTop: 4,
//   maxWidth: 300,
//   paddingTop: 12,
//   paddingBottom: 12,
//   fontSize: 16,
// },
{
  /* <Text style={styles.chatmessage}>Hello, I am Here</Text>
            <Text style={styles.chatmessage}>
              Morning guys Code cha Kai update? Zaliye ka sagli front end part
              complete? Zala asel tr code refine karayla basu
            </Text> */
}

{
  /* <Message message={'Hey Whatsup'} /> */
}
{
  /* <View style={styles.chatmessagecontainer}>
            <Text style={styles.chatmessage}>Hello, I am Here</Text>
            <Text style={styles.chatmessage}>
              Morning guys Code cha Kai update? Zaliye ka sagli front end part
              complete? Zala asel tr code refine karayla basu
            </Text>
            <Text style={styles.chatmessage}>
              j ata ahet jage tyani join kara re
            </Text>
            <Text style={styles.chatmessage}>
              recording cha kaam ahe so internet konakade changla ahe he pn
              sanga
            </Text>
            <Text style={styles.chatmessage}>
              Kahi asa kaam asel jyala stable internet lagat nahi, tar sangshil
            </Text>
            <Text style={styles.chatmessage}>
              aaj ek event ghetoy te record karaychay
            </Text>
          </View> */
}

{
  /* <View style={styles.inputicons}>
            <Feather name="mic" size={25} style={styles.inputicon2}></Feather>
            <MaterialIcons
              name="attach-file"
              size={25}
              style={styles.inputicon3}
            ></MaterialIcons>
            <AntDesign
              name="camerao"
              size={25}
              style={styles.inputicon4}
            ></AntDesign>
          </View> */
}

{
  /* <View style={styles.chatmessagecontainersender}>
            <View style={styles.chatmessagereceivedcontainer}>
              <Text style={styles.nametxt}>Gaurav Burande</Text>
              <Text style={styles.msgtxt}>Hello, I am Here</Text>
            </View>
            <Text style={styles.chatmessagereceived}>
              Morning guys Code cha Kai update? Zaliye ka sagli front end part
              complete? Zala asel tr code refine karayla basu
            </Text>
            <Text style={styles.chatmessagereceived}>
              j ata ahet jage tyani join kara re
            </Text>
            <Text style={styles.chatmessagereceived}>
              recording cha kaam ahe so internet konakade changla ahe he pn
              sanga
            </Text>
            <Text style={styles.chatmessagereceived}>
              Kahi asa kaam asel jyala stable internet lagat nahi, tar sangshil
            </Text>
            <Text style={styles.chatmessagereceived}>
              aaj ek event ghetoy te record karaychay
            </Text>
          </View> */
}

// chatmessagecontainer: {
//   // alignSelf: "flex-end",
//   paddingTop: 10,
//   paddingRight: 5,
//   alignItems: 'flex-end',
//   paddingBottom: 10,
// },
// chatmessagecontainersender: {
//   padding: 8,
//   paddingTop: 10,
//   alignItems: 'baseline',
//   paddingBottom: 10,
// },
