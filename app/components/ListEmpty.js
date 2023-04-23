import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ListEmpty() {
  return (
    <View
      style={{
        width: '100%',
        elevation: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
      }}>
      <Text>No Patient Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
