import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageReceived = ({message, messagereceived}) => {
  return (
    <View style={styles.messagechats}>
      {/* {messagereceived == '' ? null : (
        <View style={styles.chatmessagecontainerreceived}>
          <Text style={styles.chatmessagereceived}>{messagereceived}</Text>
        </View>
      )} */}

      <View style={styles.chatmessagecontainerreceived}>
        <Text style={styles.chatmessagereceived}>{messagereceived}</Text>
      </View>

      {/* {messagereceived === '' ? null : (
        <View style={styles.chatmessagecontainerreceived}>
          <Text style={styles.chatmessagereceived}>{messagereceived}</Text>
        </View>
      )} */}

      {/* <View style={styles.chatmessagecontainer}>
        <Text style={styles.chatmessage}>{message}</Text>
      </View> */}
    </View>
  );
};

export default MessageReceived;

const P100 = '100%';
const styles = StyleSheet.create({
  chatmessage: {
    padding: 6,
    backgroundColor: '#F3EBE0',
    // backgroundColor: '#41AC1C',
    borderRadius: 18,
    color: '#000000',
    // marginTop: 2,
    maxWidth: 300,
    paddingTop: 7,
    paddingBottom: 7,
    fontWeight: '300',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 7,
    fontFamily: 'Poppins-Medium',
  },
  chatmessagereceived: {
    padding: 9,
    backgroundColor: '#FFFF',
    borderRadius: 18,
    color: '#000000',
    // marginTop: 4,
    maxWidth: 300,
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'flex-start',
  },
  chatmessagecontainer: {
    // alignSelf: "flex-end",
    // paddingTop: 10,
    paddingRight: 5,
    alignItems: 'flex-end',
    // backgroundColor: '#F3EBE0',
    paddingTop: 2,
    paddingBottom: 2,
  },
  chatmessagecontainerreceived: {
    // paddingRight: 5,
    // alignItems: 'flex-start',
    paddingTop: 2,
    paddingBottom: 2,
    // backgroundColor: '#F3EBE0',
    width: P100,
    paddingLeft: 7,
  },
  chatmessagecontainersender: {
    padding: 8,
    paddingTop: 10,
    alignItems: 'baseline',
    paddingBottom: 10,
  },

  chatmessagereceivedcontainer: {
    padding: 9,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    color: '#000000',
    marginTop: 4,
    maxWidth: 300,
    // paddingTop: 2,
    // paddingBottom: 2,
    fontSize: 16,
  },
  nametxt: {
    color: '#F8011F',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
  },
  msgtxt: {
    color: '#000000',
    marginTop: 2,
    // fontWeight: "bold",
    fontSize: 16,
  },
  messagechats: {
    // backgroundColor: '#101010',
    width: P100,
  },
});

{
  /* <Ionicons name="md-checkmark-done" size={15}></Ionicons> */
}
{
  /* <Text style={styles.chatmessage}>
          Morning guys Code cha Kai update? Zaliye ka sagli front end part
          complete? Zala asel tr code refine karayla basu
        </Text> */
}

{
  /* {chat.map((payload, index) => {
            return (
              <Text style={styles.chatmessage} key={index}>
                {payload.message}
              </Text>
            );
          })} */
}

{
  /* <View style={styles.chatmessagecontainer}>
        <Text style={styles.chatmessage}>Hello, I am Here</Text>
      </View>
      <View style={styles.chatmessagecontainersender}>
        <View style={styles.chatmessagereceivedcontainer}>
          <Text style={styles.nametxt}>Gaurav Burande</Text>
          <Text style={styles.msgtxt}>Zop Atta</Text>
        </View>

        <Text style={styles.chatmessagereceived}>
          aaj ek event ghetoy te record karaychay
        </Text>
      </View> */
}
