import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {appointments} from '../../data/data';
import CardConsultation from '../../components/CardConsultation';

export default function AllConsultations({navigation, route}) {
  const {consultationStatus} = route.params;

  const consultaions = appointments.filter(item =>
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
