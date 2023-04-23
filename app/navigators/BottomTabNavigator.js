import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackNavigator from './HomeStackNavigator';
import History from '../screens/History/History';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="_Home"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
