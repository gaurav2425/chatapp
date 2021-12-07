import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from '../actions/index';
import PunkSelect from './PunkSelect';

const Username = () => {
  const [username, setUsername] = useState('');
  const myState = useSelector(state => state.changeTheNumber);
  const myemail = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.usernamecontainer}>
      {myState === 1 ? (
        <View style={styles.fieldscontainer}>
          <View style={styles.txtcontainer}>
            {/* <Image
                source={require('../assets/images/span.png')}
                style={{width: 150, height: 55}}></Image> */}
          </View>
          <Text style={styles.usernameheadingtxt}>You Can change it Later</Text>
          <TextInput
            placeholder="Username"
            style={styles.username}
            value={username}
            autoCapitalize="none"
            textContentType="name"
            //   onChangeText={text => setName(text)}
          ></TextInput>

          <View style={styles.containertodo}>
            {/* onPress={() => dispatch(decNumber())} */}
            {/* <TouchableOpacity onPress={() => dispatch(decNumber())}>
              <Text style={styles.txt}>Decrease</Text>
            </TouchableOpacity> */}
            {/* <Text style={styles.txt}>{myState}</Text> */}
            {/* {myState} */}
            {/* onPress={() => dispatch(incNumber())} */}
            {/* <TouchableOpacity onPress={() => dispatch(incNumber())}>
              <Text style={styles.txt}>Increase</Text>
            </TouchableOpacity> */}
          </View>

          <View style={styles.genderselect}>
            <Text style={styles.choosegenderheading}>Choose Gender</Text>

            <View style={styles.radiobuttons}>
              <View style={styles.radiobuttonmale}>
                <Text style={styles.txtmale}>Male</Text>
                <RadioButton></RadioButton>
              </View>
              <View style={styles.radiobuttonfemale}>
                <Text style={styles.txtfemale}>Female</Text>
                <RadioButton></RadioButton>
              </View>
              <View style={styles.radiobuttonother}>
                <Text style={styles.txtother}>Other</Text>
                <RadioButton></RadioButton>
              </View>
            </View>
          </View>

          {/* <TextInput
          placeholder="Username"
          style={styles.name}
          value={username}
          autoCapitalize="none"
          textContentType="username"
          onChangeText={text => setUsername(text)}></TextInput> */}
          {/* <TextInput
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
              onChangeText={text => setPassword(text)}></TextInput> */}

          {/* <TouchableOpacity
              style={styles.btn}
              onPress={(() => sendCredentials(), handleStep)}>
              <Text style={styles.btntxt}>Next</Text>
            </TouchableOpacity> */}

          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => dispatch(decNumber())}
              style={styles.buttonprevious}>
              <Text style={styles.buttonprevioustxt}>Previous</Text>
            </TouchableOpacity>

            <View style={styles.buttonnext}>
              <Text
                style={styles.buttonnexttxt}
                onPress={() => dispatch(incNumber())}>
                Next
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <PunkSelect></PunkSelect>
      )}
    </View>
  );
};

export default Username;

const P90 = '90%';
const P40 = '40%';

const styles = StyleSheet.create({
  usernamecontainer: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  fieldscontainer: {
    paddingTop: 150,
    // backgroundColor: '#F65F65',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    // backgroundColor: '#FFFF',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
    borderWidth: 1,
    borderColor: '#D9D3D3',
  },
  usernameheadingtxt: {
    alignSelf: 'center',
    width: P90,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#696969',
    width: P90,
    paddingTop: 35,
    paddingBottom: 10,
  },
  buttonprevious: {
    height: 40,
    width: P40,
    backgroundColor: '#FFFF',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  buttonnext: {
    height: 40,
    width: P40,
    backgroundColor: '#3E3C9C',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  choosegenderheading: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  buttonprevioustxt: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  buttonnexttxt: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  txtmale: {
    fontFamily: 'Poppins-Medium',
  },
  txtfemale: {
    fontFamily: 'Poppins-Medium',
  },
  txtother: {
    fontFamily: 'Poppins-Medium',
  },
  radiobuttons: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FFFF',
  },
  genderselect: {
    width: P90,
    // backgroundColor: '#FFFF',
    paddingTop: 20,
  },
  radiobuttonother: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingTop: 10,
  },
  radiobuttonmale: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 10,
    paddingTop: 10,
  },
  radiobuttonfemale: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingTop: 10,
  },
});
