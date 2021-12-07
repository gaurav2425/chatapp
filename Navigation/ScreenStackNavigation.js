import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, cr} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';
import Home from '../screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Authenticated from '../screens/Authenticated';
import ChatScreen from '../screens/ChatScreen';
import Explore from '../screens/Explore';
import FriendRequests from '../screens/FriendRequests';
const Stack = createNativeStackNavigator();
const ScreenStackNavigation = () => {
  const [isloggedin, setLoggedin] = useState(null);
  //   const [token, setToken] = useState(null);
  fetchMyAPI = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  };
  useEffect(() => {
    fetchMyAPI();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="FriendRequests"
          component={FriendRequests}></Stack.Screen>
        <Stack.Screen
          name="explore"
          component={Explore}
          options={{
            animationEnabled: false,
          }}></Stack.Screen>
        <Stack.Screen
          name="home"
          component={Authenticated}
          options={{
            animationEnabled: false,
          }}
        />

        {/* {isloggedin == null ? (
          <Stack.Screen name="loading" component={Loading} />
        ) : isloggedin == true ? (
          <>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="home" component={Home} />
          </>
        )} */}
        {/* isloggedin==null?
        <Stack.Screen name="loading" component={Loading} />
        :isloggedin==true? :
        <Stack.Screen name="home" component={Home} />
        :
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStackNavigation;

const styles = StyleSheet.create({});
