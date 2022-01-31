import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {
  MyProfileInfoAction,
  MyProfileBioAction,
} from '../actions/MyProfileInfoaction';

const Bio = ({navigation: {goBack}}) => {
  const MyProfileInfo = useSelector(state => state.MyProfileInfoReducer);
  console.log(MyProfileInfo);

  const dispatch = useDispatch();
  const [bio, setBio] = useState(`${MyProfileInfo.myprofile.bio}`);
  const updateBio = async () => {
    const token = await AsyncStorage.getItem('token');

    fetch('http://192.168.1.7:5000/api/bio/updatebio', {
      method: 'POST',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        bio: bio,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('bio Updated');
        goBack();

        dispatch(
          MyProfileBioAction({
            myprofilebio: bio,
          }),
        );
        console.log('MYYyyyyyyyyyyyyyyyyyyyyyyy');
        console.log(MyProfileInfo.myprofile);
        console.log('MYYyyyyyyyyyyyyyyyyyyyyyyy');
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

  return (
    <View style={styles.bio}>
      <View style={styles.header}>
        <TouchableRipple
          onPress={() => {
            goBack();
          }}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          style={styles.biobackripple}>
          <Ionicons
            name="chevron-back"
            size={30}
            style={{color: '#000000'}}></Ionicons>
        </TouchableRipple>
      </View>
      <View style={styles.txtinputcontainer}>
        <TextInput
          style={styles.txtinput}
          multiline={true}
          numberOfLines={10}
          placeholder="Enter your Bio"
          textAlignVertical="top"
          value={bio}
          onChangeText={text => setBio(text)}></TextInput>
      </View>

      <TouchableOpacity style={styles.btn} onPress={updateBio}>
        <Text style={styles.btntxt}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bio;

const P90 = '90%';

const styles = StyleSheet.create({
  bio: {
    backgroundColor: '#FAF5EF',
    flex: 1,
    flexDirection: 'column',
  },
  txtinputcontainer: {
    // padding: 100,
    backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 60,
    borderRadius: 10,
    // height: 350,
  },
  txtinput: {
    // paddingBottom: 100,
    // height: 250,
    backgroundColor: '#FFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    borderRadius: 10,
    textAlignVertical: 'top',
    // paddingBottom: 100,
    borderColor: '#808080',
    borderWidth: 0.5,
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#1A4493',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
  },
  btntxt: {
    fontFamily: 'Poppins-Medium',
    color: '#FFFF',
    fontSize: 15,
  },
  header: {
    height: 70,
    // backgroundColor: '#F65F65',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  biobackripple: {
    // padding: 20,
    width: 40,
    height: 40,
    // backgroundColor: '#FFFF',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
