import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setEmail} from '../actions/index';
// import {useSelector, useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const myState = useSelector(state => state.Login);
  // const dispatch = useDispatch();

  const sendCredentials = () => {
    const fetchMYAPI = async () => {
      fetch('http://192.168.1.7:5000/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(async data => {
          console.log(data);

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
          throw err;
        });
    };
    fetchMYAPI();
  };

  return (
    <View style={styles.logincontainer}>
      {/* <Text style={styles.txtlogo}>SpanCock</Text> */}
      <View style={styles.fieldscontainer}>
        <View style={styles.txtcontainer}>
          {/* <Text style={styles.txt}>Login</Text> */}
          <Image
            source={require('../assets/images/span.png')}
            style={{width: 150, height: 55}}></Image>
        </View>
        <TextInput
          placeholder="Email"
          style={styles.email}
          value={email}
          onChangeText={text => setEmail(text)}></TextInput>

        <TextInput
          placeholder="Password"
          style={styles.password}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}></TextInput>

        {/* <View style={styles.btncontainer}>
          <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"></Button>
        </View> */}
        {/* <Text style={styles.txt2} onPress={() => navigation.replace('signup')}>
          Create a New Account
        </Text> */}
        <TouchableOpacity style={styles.btn} onPress={() => sendCredentials()}>
          <Text style={styles.btntxt}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.txt2container}>
        <Text style={styles.txt2} onPress={() => navigation.replace('signup')}>
          Create a New Account ?
        </Text>
        <Text
          style={styles.txt2Register}
          onPress={() => navigation.replace('signup')}>
          Register
        </Text>
      </View>
    </View>
  );
};

export default Login;
const P90 = '90%';

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    justifyContent: 'space-between',
  },
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-BlackItalic',
    // textAlign: 'center',
    marginLeft: 10,
  },
  txtcontainer: {
    width: P90,
    // backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtlogo: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Poppins-BlackItalic',
    textAlign: 'center',
    paddingTop: 30,
  },
  email: {
    // backgroundColor: '#000000',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    borderWidth: 1,
    // borderColor: '#7D7878',
    borderColor: '#D9D3D3',
  },
  name: {
    // backgroundColor: '#000000',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    // fontSize: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  password: {
    // backgroundColor: '#000000',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 10,
    borderWidth: 1,
    // borderColor: '#7D7878',
    borderColor: '#D9D3D3',
  },
  fieldscontainer: {
    paddingTop: 150,
  },
  btncontainer: {
    width: P90,
    alignSelf: 'center',
    paddingTop: 10,
  },
  btn: {
    height: 50,
    width: P90,
    backgroundColor: '#3E3C9C',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btntxt: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    // letterSpacing: 1,
  },
  txt2: {
    color: '#000000',
    // width: P90,

    paddingTop: 10,
    marginLeft: 10,
    fontFamily: 'Poppins-Medium',
    // backgroundColor: '#FFFF',
  },
  txt2Register: {
    fontFamily: 'Poppins-Bold',
    // backgroundColor: '#FFFF',
    paddingTop: 10,
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
});
