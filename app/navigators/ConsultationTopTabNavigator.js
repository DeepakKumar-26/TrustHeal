import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllConsultations from '../screens/Home/AllConsultations';
import PConsultaions from '../screens/Home/PConsultaions';
import EConsultations from '../screens/Home/EConsultations';

const Tab = createMaterialTopTabNavigator();
export default function ConsultationTopTabNavigator({route}) {
  const {consultationStatus} = route.params;
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor:'#ffffff'}}>
      <Tab.Screen
        name="All Consultation"
        component={AllConsultations}
        initialParams={{consultationStatus}}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name="P-Consultation"
        component={PConsultaions}
        initialParams={{consultationStatus}}
        options={{title: 'Physical'}}
      />
      <Tab.Screen
        name="E-Consultation"
        component={EConsultations}
        initialParams={{consultationStatus}}
        options={{title: 'Online'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
