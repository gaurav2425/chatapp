import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Story = () => {
  return (
    <View style={styles.story}>
      <View style={styles.storyimage}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.image}></Image>
      </View>
      <Text style={styles.txt}>Arpit</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 30,
    padding: 10,
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 10,
  },
  storyimage: {
    width: 63,
    height: 63,
    borderWidth: 3,
    borderColor: '#ff8501',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
