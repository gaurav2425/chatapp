import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Todo from '../screens/Todo';
import Search from '../screens/Search';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="hometab"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <Entypo
              name={focused ? 'home' : 'home'}
              size={26}
              color={focused ? '#000000' : '#101010'}
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

          tabBarIcon: ({focused}) => (
            <AntDesign
              name={focused ? 'search1' : 'search1'}
              size={25}
              color={focused ? '#000000' : '#101010'}
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
            <Octicons
              name={focused ? 'gist-secret' : 'gist-secret'}
              size={23}
              color={focused ? '#000000' : '#101010'}
            />
          ),
        }}
        component={ProfileScreen}></Tab.Screen>

      <Tab.Screen
        name="plus"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <AntDesign
              name={focused ? 'plus' : 'plus'}
              size={25}
              color={focused ? '#000000' : '#101010'}
            />
          ),
        }}
        component={Search}></Tab.Screen>

      <Tab.Screen
        name="signup"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <Zocial
              name={focused ? 'call' : 'call'}
              size={25}
              color={focused ? '#000000' : '#101010'}
            />
          ),
        }}
        component={Todo}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
