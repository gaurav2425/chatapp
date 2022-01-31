import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, cr} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';
import Bio from '../screens/Bio';
import Share from '../screens/Share';
import Browser from '../screens/Browser';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Authenticated from '../screens/Authenticated';
import ChatScreen from '../screens/ChatScreen';
import Explore from '../screens/Explore';
import FriendRequests from '../screens/FriendRequests';
import Notification from '../screens/Notification';
import ProfileDetail from '../screens/ProfileDetail';
import Settings from '../screens/Settings';
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
            animation: 'none',
          }}
        />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            animation: 'none',
          }}
        />
        <Stack.Screen
          name="notification"
          component={Notification}
          options={{
            animation: 'none',
          }}></Stack.Screen>
        <Stack.Screen
          name="FriendRequests"
          component={FriendRequests}
          options={{
            animation: 'none',
          }}></Stack.Screen>
        <Stack.Screen
          name="settings"
          component={Settings}
          options={{
            animation: 'none',
          }}></Stack.Screen>

        <Stack.Screen name="browser" component={Browser} />

        <Stack.Screen
          name="share"
          component={Share}
          options={{
            animation: 'none',
          }}></Stack.Screen>
        <Stack.Screen
          name="bio"
          // component={Bio}
          component={SplashScreen}
          options={{
            animation: 'none',
          }}></Stack.Screen>
        <Stack.Screen
          name="profiledetail"
          component={ProfileDetail}
          options={{
            animation: 'none',
          }}></Stack.Screen>
        <Stack.Screen
          name="explore"
          component={Explore}
          options={{
            animation: 'none',
          }}></Stack.Screen>
        <Stack.Screen
          name="home"
          component={Authenticated}
          options={{
            animation: 'none',
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
