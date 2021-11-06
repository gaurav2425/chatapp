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
import Todo from '../screens/Todo';
import Search from '../screens/Search';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
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
              size={25}
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
            <EvilIcons
              name={focused ? 'search' : 'search'}
              size={35}
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
            <Fontisto
              name={focused ? 'user-secret' : 'user-secret'}
              size={23}
              color={focused ? '#000000' : '#101010'}
            />
          ),
        }}
        component={ProfileScreen}></Tab.Screen>

      <Tab.Screen
        name="signup"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#FAF5EF',
          tabBarInactiveBackgroundColor: '#FAF5EF',

          tabBarIcon: ({focused}) => (
            <Fontisto
              name={focused ? 'user-secret' : 'user-secret'}
              size={23}
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
