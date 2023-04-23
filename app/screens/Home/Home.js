import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export default function Home({navigation, route}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectType = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
    navigation.navigate('Consultations', {consultationStatus: itemValue});
  };

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center',padding:5,elevation:3,backgroundColor:'#ffffff'}}>
        <Text style={{}}>Consultation Type :</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={handleSelectType}
          style={{flexGrow: 1}}>
          <Picker.Item label="Upcoming" value="UPCOMING" />
          <Picker.Item
            label="Prescription Pending"
            value="PRESCRIPTION_PENDING"
          />
          <Picker.Item label="Completed" value="COMPLETED" />
          <Picker.Item label="Canceled" value="CANCELED" />
          <Picker.Item label="All Consultaions" value="" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
