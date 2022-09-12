import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../screens/Home';
import ChatBox from '../screens/TabBarScreens/ChatBox';
import Share from '../screens/Share';
import SignUp from '../screens/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Call from '../screens/TabBarScreens/Call';
import ProfileScreen from '../screens/ProfileScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import {TouchableRipple} from 'react-native-paper';
import Todo from '../screens/Todo';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          // marginHorizontal: 10,
          // marginBottom: 10,
          // borderRadius: 20,
          borderTopWidth: 0,
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
      }}>
      <Tab.Screen
        name="hometab"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <Foundation
              name={focused ? 'home' : 'home'}
              size={30}
              suppressHighlighting={true}
              // color={focused ? '#ff4d4d' : '#000000'}
              color={focused ? '#000000' : '#696969'}
            />
          ),
        }}
        component={Home}></Tab.Screen>

      <Tab.Screen
        name="searchtab"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',
          tabBarActiveTintColor: '#F65F65',

          tabBarIcon: ({focused}) => (
            <Feather
              name={focused ? 'search' : 'search'}
              size={26}
              suppressHighlighting={true}
              // color={focused ? '#000000' : '#101010'}
              // color={focused ? '#ff4d4d' : '#000000'}

              color={focused ? '#000000' : '#696969'}
            />
          ),
        }}
        component={Search}></Tab.Screen>

      <Tab.Screen
        name="profiletab"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <AntDesign
              name={focused ? 'message1' : 'message1'}
              size={25}
              // color={focused ? '#000000' : '#101010'}
              // color={focused ? '#ff4d4d' : '#000000'}
              color={focused ? '#000000' : '#696969'}
            />
          ),
        }}
        component={ChatBox}></Tab.Screen>

      {/* <AntDesign
            name="find"
            size={27}
            style={styles.exploreicon}></AntDesign> */}

      <Tab.Screen
        name="hearttab"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <Feather
              name={focused ? 'phone-call' : 'phone-call'}
              size={23}
              // color={focused ? '#000000' : '#101010'}
              // color={focused ? '#ff4d4d' : '#000000'}
              color={focused ? '#000000' : '#696969'}
            />
          ),
        }}
        component={Call}></Tab.Screen>

      <Tab.Screen
        name="testtab"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            // <AntDesign

            //   name={focused ? 'find' : 'find'}
            //   size={25}
            //   color={focused ? '#000000' : '#101010'}
            // />

            // <TouchableRipple
            //   onPress={() => console.log('Pressed')}
            //   rippleColor="rgba(0, 0, 0, .1)"
            //   borderless
            //   style={styles.profilecontainerripple}>

            <View style={styles.profilecontainer}>
              <Image
                source={{
                  uri: 'https://img.seadn.io/files/f10386a1d9330f9cc12879154e6457cd.png?fit=max&w=600',
                }}
                style={styles.image}></Image>
              {/* <Text style={styles.txtavatar}>GB</Text> */}
            </View>
            // </TouchableRipple>
          ),
        }}
        component={ProfileScreen}></Tab.Screen>

      {/* <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profilecontainerripple}>
            <View style={styles.profilecontainer}>
              <Image
                source={require('../assets/images/punk8033.png')}
                style={styles.image}></Image>
              <Text style={styles.txtavatar}>GB</Text>
            </View>
          </TouchableRipple> */}

      {/* <Tab.Screen
        name="plus"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'notifications-outline' : 'notifications-outline'}
              size={25}
              color={focused ? '#000000' : '#101010'}
            />
          ),
        }}
        component={Share}></Tab.Screen> */}

      {/* <Tab.Screen
        name="signup"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <View style={styles.profilecontainer}>
              <Image
                source={require('../assets/images/punk8033.png')}
                style={styles.image}></Image>
            </View>
          ),
        }}
        component={Todo}></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  profilecontainerripple: {
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginRight: 4,
    padding: 4,
    borderRadius: 20,
    marginRight: 10,
    paddingRight: 4,
    paddingLeft: 4,
  },
  txtavatar: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 17,
  },
  profilecontainer: {
    width: 29,
    height: 29,
    backgroundColor: '#F3EBE0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#696969',
  },
  image: {
    width: 29,
    height: 29,
    borderRadius: 20,
  },
});
