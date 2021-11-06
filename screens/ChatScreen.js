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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import "./UserAgent";
// import { io } from "socket.io-client";
// import io from 'socket.io-client/dist/socket.io';
// import {Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
// import socketIo from 'socket.io-client';
import {Button} from 'react-native-paper';

const ChatScreen = ({navigation: {goBack}}) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
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
    // socket.connect();
    // socket.on('connect', () => {
    //   console.log('connected From Frontend Side');
    // });
    // socket.emit('joined', () => {
    //   console.log('joined');
    //   alert('joined');
    // });
    // socket.on('welcome', () => {
    //   console.log('Welcome User To narayan chat');
    // });
    // socket.on("disconnected", () => {
    //   console.log(socket.id);
    //   socket.disconnect();
    //   socket.off();
    // });
    // socket.emit("forceDisconnect", () => {
    //   socket.disconnect();
    //   console.log("Disconnected Successfully");
    // });
    // socket.on("forceDisconnect", () => {
    //   console.log("Disconnected Successfully");
    // });
    // return () => {
    //   socket.emit('forceDisconnect');
    //   socket.disconnect();
    //   // console.log(socket.id);
    //   socket.off();
    // };
  }, []);

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
  console.log(chat);

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
              source={require('.././assets/images/vk.jpg')}
              style={styles.image}></Image>
          </View>
          <View>
            <Text style={styles.name}>Vicky Kaushal</Text>
            <Text style={styles.status}>Online</Text>
          </View>
        </View>

        <View style={styles.chatscreenheaderright}>
          <Entypo
            name="dots-three-vertical"
            size={20}
            style={styles.icon2}></Entypo>
          <MaterialCommunityIcons
            name="phone-plus"
            size={25}
            style={styles.icon3}></MaterialCommunityIcons>
        </View>
      </View>

      <View style={styles.chatsection}>
        <ScrollView>
          {/* <View style={styles.chatmessagecontainer}>
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
          </View> */}
          {/* <View style={styles.chatmessagecontainersender}>
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
          </View> */}
          <View style={styles.chatmessagecontainer}>
            {/* <Text style={styles.chatmessage}>Hello, I am Here</Text>
            <Text style={styles.chatmessage}>
              Morning guys Code cha Kai update? Zaliye ka sagli front end part
              complete? Zala asel tr code refine karayla basu
            </Text> */}

            {chat.map((payload, index) => {
              return (
                <Text style={styles.chatmessage} key={index}>
                  {payload.message}
                </Text>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.chatinputmain}>
        <View style={styles.chatinput}>
          <View style={styles.chatinputleft}>
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={25}
              style={styles.inputicon1}></MaterialCommunityIcons>
            <TextInput
              placeholder="Type Something ...."
              style={styles.input}
              // autoFocus
              // value={message}
              value={message}
              // onChange={(e) => setMessage(e.target.value)}
              onChangeText={text => setMessage(text)}></TextInput>
          </View>
          <View>
            <Button style={styles.btnsend} onPress={sendChat}>
              Send
            </Button>
          </View>
          {/* <View style={styles.inputicons}>
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
          </View> */}
        </View>
      </View>

      <StatusBar backgroundColor="#F3EBE0" />
    </View>
  );
};

export default ChatScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ninty = '90%';
const styles = StyleSheet.create({
  containermain: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
  },
  chatscreenheader: {
    // flex: 0.1,
    // backgroundColor: "#EEE8AA",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: 5,
    // borderBottomWidth: 0.3,
    position: 'absolute',
    width: windowWidth,
    borderBottomColor: '#8B4513',
    height: 70,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

    elevation: 1,
    backgroundColor: '#F3EBE0',
  },
  chatsection: {
    flex: 1,
    marginTop: 90,
    // backgroundColor: "#CD5C5C",
  },
  chatinputmain: {
    flex: 0.1,
    // backgroundColor: "#A52A2A",
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  imagecontainer: {
    width: 35,
    height: 35,
    marginLeft: 20,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  chatscreenheaderleft: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
  },
  chatscreenheaderright: {
    marginTop: 25,
  },
  icon1: {
    marginLeft: 10,
  },
  icon2: {
    marginRight: 25,
  },
  chatscreenheaderright: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  icon3: {
    marginRight: 15,
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
  },
  status: {
    marginLeft: 13,
    fontSize: 10,

    fontFamily: 'Lato_400Regular',
  },
  chatinput: {
    display: 'flex',
    flexDirection: 'row',
    width: ninty,
    backgroundColor: '#FFFF',
    backgroundColor: '#F3EBE0',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  inputicons: {
    display: 'flex',
    flexDirection: 'row',
  },
  chatinputleft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputicon1: {
    marginLeft: 10,
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
    fontSize: 16,
    marginLeft: 5,
    backgroundColor: '#F3EBE0',
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
  chatmessagecontainer: {
    // alignSelf: "flex-end",
    paddingTop: 10,
    paddingRight: 5,
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  chatmessagecontainersender: {
    padding: 8,
    paddingTop: 10,
    alignItems: 'baseline',
    paddingBottom: 10,
  },
  chatmessagereceived: {
    padding: 9,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    color: '#000000',
    marginTop: 4,
    maxWidth: 300,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
  },
  chatmessagereceivedcontainer: {
    padding: 9,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    color: '#000000',
    marginTop: 4,
    maxWidth: 300,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
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
  },
});
