import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({name, borderless, you, uri}) => {
  {
    /* <LinearGradient
            colors={['#8a3ab9', '#e95950', '#bc2a8d', '#fccc63']}
            style={{padding: 10, height: 30, width: 30}}></LinearGradient> */
  }
  // const colors={['#8a3ab9', '#e95950', '#bc2a8d', '#fccc63']}

  return (
    <View style={styles.story}>
      <LinearGradient
        style={styles.storyimagemain}
        colors={['#8a3ab9', '#e95950', '#bc2a8d', '#fccc63']}>
        <View style={styles.storyimage}>
          <Image
            source={{
              uri: `${uri}`,
            }}
            style={styles.image}></Image>
          {/* <Text style={styles.txtavatar}>GB</Text> */}
        </View>
      </LinearGradient>
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
    width: 77,
    height: 77,
    justifyContent: 'center',
  },
  image: {
    width: 61,
    height: 61,
    borderRadius: 50,
    padding: 10,
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 10.2,
  },
  storyimage: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: '#FAF5EF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  storyimagemain: {
    width: 69,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  txtavatar: {
    fontFamily: 'Poppins-Medium',
    color: '#696969',
    fontSize: 30,
  },
});
