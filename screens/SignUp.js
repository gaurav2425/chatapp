import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendCredentials = () => {
    fetchMYAPI = async () => {
      fetch('http://192.168.1.5:5000/api/users', {
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

  return (
    <View style={styles.signupcontainer}>
      <Text style={styles.txtlogo}>SpanCock</Text>
      <View style={styles.fieldscontainer}>
        <View style={styles.txtcontainer}>
          <Text style={styles.txt}>SignUp</Text>
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
        <Text style={styles.txt2} onPress={() => navigation.replace('login')}>
          Already have an Account?
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => sendCredentials()}>
          <Text style={styles.btntxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
const P90 = '90%';

const styles = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
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
    backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
  },
  name: {
    backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    // fontSize: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
  },
  password: {
    backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 10,
  },
  fieldscontainer: {
    paddingTop: 60,
  },
  btncontainer: {
    width: P90,
    alignSelf: 'center',
    paddingTop: 10,
  },
  btn: {
    height: 50,
    width: P90,
    backgroundColor: '#860F7A',
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
    fontFamily: 'Poppins-BoldItalic',
  },
  txt2: {
    color: '#000000',
    width: P90,
    alignSelf: 'center',
    paddingTop: 10,
    marginLeft: 10,
    fontFamily: 'Poppins-BoldItalic',
  },
});
