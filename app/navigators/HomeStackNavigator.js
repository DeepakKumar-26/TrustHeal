import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import ConsultationTopTabNavigator from './ConsultationTopTabNavigator';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Consultations"
        component={ConsultationTopTabNavigator}
        options={({route}) => ({
          title:
            route.params.consultationStatus.length > 0
              ? route.params.consultationStatus.replace('_', ' ')
              : 'ALL CONSULTATIONS',
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
