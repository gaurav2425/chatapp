import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Story = ({name, borderless}) => {
  return (
    <View style={styles.story}>
      <View
        style={styles.storyimage}
        // colors={[
        //   '#00FFFF',
        //   '#17C8FF',
        //   '#329BFF',
        //   '#4C64FF',
        //   '#6536FF',
        //   '#8000FF',
        // ]}
      >
        <Image
          source={require('../assets/images/punk8033.png')}
          style={styles.image}></Image>
      </View>
      <Text style={styles.txt}>{name}</Text>
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
    // marginLeft: 5,
    // marginRight: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 10,
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 10,
  },
  storyimage: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderColor: '#087613',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
