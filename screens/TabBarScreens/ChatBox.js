import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Chatbox from '../../components/ChatBox';

const ChatBox = () => {
  const P100 = '100%';
  return (
    <View style={styles.call_main_container}>
      <ScrollView
        style={styles.scroll_view}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          // width: P100,
        }}>
        <Chatbox></Chatbox>
        <Chatbox></Chatbox>
        <Chatbox></Chatbox>
      </ScrollView>
      <Text style={styles.call_txt}>ChatBox Feature is under production!</Text>
    </View>
  );
};

export default ChatBox;

const P90 = '91%';

const styles = StyleSheet.create({
  call_main_container: {
    backgroundColor: '#FAF5EF',
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  call_txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  scroll_view: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
