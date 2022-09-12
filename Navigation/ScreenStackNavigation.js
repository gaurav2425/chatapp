import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Easing, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';
import Bio from '../screens/Bio';
import Share from '../screens/Share';
// import Email from '../screens/signupscreens/Email';
import Browser from '../screens/Browser';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Email from '../screens/signupscreens/Email';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Authenticated from '../screens/Authenticated';
import ChatScreen from '../screens/ChatScreen';
import Explore from '../screens/Explore';
import FriendRequests from '../screens/FriendRequests';
import Notification from '../screens/Notification';
import ProfileDetail from '../screens/ProfileDetail';
import Settings from '../screens/Settings';
import InitialScreen from '../screens/InitialScreen';
import Otp from '../screens/signupscreens/Otp';
import Password from '../screens/signupscreens/Password';
import Name from '../screens/signupscreens/Name';
import DOB from '../screens/signupscreens/DOB';
import PlaxRoom from '../screens/PlaxRoom/Plaxroom';
const Stack = createStackNavigator();
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

  const transitionConfig = () => {
    return {
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {
        const {layout, position, scene} = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [-width, 0],
          extrapolate: 'clamp',
        });

        return {
          transform: [{translateX}],
        };
      },
    };
  };

  const options = {
    gestureEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
  };

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const forFade = ({current, next}) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0,
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });

    return {
      leftButtonStyle: {opacity},
      rightButtonStyle: {opacity},
      titleStyle: {opacity},
      backgroundStyle: {opacity},
    };
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="loading" component={Loading} options={options} />

        <Stack.Screen name="dob" component={DOB} options={options} />

        <Stack.Screen name="name" component={Name} options={options} />

        <Stack.Screen name="password" component={Password} options={options} />

        <Stack.Screen
          name="otp"
          component={Otp}
          // options={{
          //   animation: 'none',
          // }}
          options={options}
        />

        <Stack.Screen
          name="emailscreen"
          component={Email}
          // options={{
          //   animation: 'none',
          // }}
          options={options}
        />
        <Stack.Screen name="initialscreen" component={InitialScreen} />
        <Stack.Screen
          name="signup"
          component={SignUp}
          // options={{
          //   animation: 'none',
          // }}
          options={options}
        />
        <Stack.Screen
          name="login"
          component={Login}
          // options={{
          //   animation: 'none',
          // }}
          options={options}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          // options={{
          //   animation: 'none',
          // }}

          options={options}
        />
        <Stack.Screen
          name="notification"
          component={Notification}
          // options={transitionConfig}
          // options={{
          //   animation: transitionConfig,

          // }}
          // options={{
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          //   },
          // }}

          // options={{
          //   gestureEnabled: true,
          //   gestureDirection: transitionConfig,
          // }}

          options={options}

          // initialParams={{transitionConfig}}
        ></Stack.Screen>
        <Stack.Screen
          name="FriendRequests"
          component={FriendRequests}
          // options={{
          //   animation: 'none',
          // }}
          options={options}></Stack.Screen>
        <Stack.Screen
          name="settings"
          component={Settings}
          options={options}></Stack.Screen>

        <Stack.Screen
          name="plaxroom"
          component={PlaxRoom}
          options={options}></Stack.Screen>

        <Stack.Screen name="browser" component={Browser} />

        <Stack.Screen
          name="share"
          component={Share}
          options={options}></Stack.Screen>
        <Stack.Screen
          name="bio"
          component={Bio}
          // component={SplashScreen}
          options={options}></Stack.Screen>
        <Stack.Screen
          name="profiledetail"
          component={ProfileDetail}
          options={options}></Stack.Screen>
        <Stack.Screen
          name="explore"
          component={Explore}
          options={options}></Stack.Screen>
        <Stack.Screen name="home" component={Authenticated} options={options} />

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
