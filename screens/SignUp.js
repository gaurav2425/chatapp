import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Username from './Username';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from '../actions/index';
import {UserData, UserPassword} from '../actions/Useraction';
import UserReducer from '../reducers/User';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(0);
  const userdata = useSelector(state => state);
  console.log(userdata);

  const myState = useSelector(state => state.changeTheNumber);
  const myemail = useSelector(state => state.UserReducer);
  // const mypassword = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();

  // const handleStep = () => {
  //   setStep(step + 1);
  // };

  // const handleReduxData = () => {
  //   setStep(step + 1);
  //   dispatch(
  //     UserData({
  //       name: name,
  //       email: email,
  //       password: password,
  //     }),
  //   );
  // };

  const sendCredentials = () => {
    const fetchMYAPI = async () => {
      fetch('http://192.168.1.7:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          username: username,
        }),
      })
        .then(res => res.json())
        .then(async data => {
          // console.log(data);

          try {
            await AsyncStorage.setItem('token', data.token);
            navigation.replace('home');
          } catch (e) {
            //saving error
            console.log('Error hai', e);
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchMYAPI();
    // console.log(email, password);

    // const baseUrl = 'http://192.168.140.1:5000';

    // axios({
    //   method: 'POST',
    //   url: `${baseUrl}/api/users`,
    // }).then(response => {
    //   console.log(response.data);
    // });
  };
  console.log(myemail);
  // console.log(myemail.email);
  // console.log(myemail.name);
  // console.log(myemail.password);
  return (
    <View style={styles.signupcontainermain}>
      <View style={styles.signupcontainer}>
        <View style={styles.fieldscontainer}>
          <View style={styles.txtcontainer}>
            <Text style={styles.txthead}>Create a new account</Text>
          </View>
          <TextInput
            placeholder="Name"
            style={styles.name}
            value={name}
            autoCapitalize="none"
            textContentType="name"
            onChangeText={text => setName(text)}></TextInput>
          <TextInput
            placeholder="Username"
            style={styles.name}
            value={username}
            autoCapitalize="none"
            textContentType="username"
            onChangeText={text => setUsername(text)}></TextInput>
          <TextInput
            placeholder="Email"
            style={styles.email}
            value={email}
            autoCapitalize="none"
            textContentType="emailAddress"
            onChangeText={text => setEmail(text)}></TextInput>

          <TextInput
            placeholder="Password"
            style={styles.password}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}></TextInput>

          <TouchableOpacity
            style={styles.btnmaincontainer}
            onPress={() => sendCredentials()}>
            <LinearGradient
              style={styles.btn}
              colors={['#8a3ab9', '#e95950', '#fccc63']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.btntxt}>SignUp</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.txt2container}>
          <Text style={styles.txt2}>Already have an Account ?</Text>
          <Text
            style={styles.txt2Register}
            onPress={() => navigation.replace('login')}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
const P90 = '85%';
const P80 = '80%';

const styles = StyleSheet.create({
  signupcontainermain: {
    flex: 1,
    backgroundColor: '#F65F65',
  },
  signupcontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    justifyContent: 'space-between',
  },
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-BlackItalic',
    // textAlign: 'center',
    // marginLeft: 10,
  },
  txtcontainer: {
    width: P90,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFFF',
    alignSelf: 'center',
  },
  txtlogo: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Poppins-BlackItalic',
    textAlign: 'center',
    // paddingTop: 30,
  },
  email: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    // paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    borderColor: '#D9D3D3',
  },
  name: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 20,
    // borderRadius: 10,
    // fontSize: 10,
    // paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    borderColor: '#D9D3D3',
  },
  password: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    // paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: '#D9D3D3',
  },
  fieldscontainer: {
    paddingTop: 80,
    // backgroundColor: '#FFFF',
  },
  btncontainer: {
    width: P90,
    // alignSelf: 'center',
    // paddingTop: 10,
  },
  btn: {
    height: 50,
    width: P90,
    backgroundColor: '#12BF0E',
    alignSelf: 'center',
    borderRadius: 30,
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },
  btntxt: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  txt2: {
    color: '#000000',
    // width: P90,
    alignSelf: 'center',
    // paddingTop: 10,
    // marginLeft: 10,
    fontFamily: 'Poppins-Medium',
  },
  txt2Register: {
    fontFamily: 'Poppins-Bold',
    // backgroundColor: '#FFFF',
    // paddingTop: 10,
    marginLeft: 5,
    color: '#000000',
  },
  txt2container: {
    // backgroundColor: '#F65F65',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 30,
  },
  txthead: {
    color: '#000000',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
  },
  btnmaincontainer: {
    marginTop: 20,
  },
});
