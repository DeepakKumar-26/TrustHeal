import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardConsultation from '../../components/CardConsultation';
import {appointments} from '../../data/data';

export default function EConsultations({route}) {
  const {consultationStatus} = route.params;

  const consultaions = appointments.filter(
    item =>
      item.consultationType !== 'PHYSICAL' &&
      item.consultationStatus.includes(consultationStatus),
  );
  return (
    <FlatList
      data={consultaions}
      keyExtractor={(item, index) => item + index}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
      renderItem={({item}) => <CardConsultation item={item} />}
      ItemSeparatorComponent={<View style={{height: 5}} />}
    />
  );
}

const styles = StyleSheet.create({});
