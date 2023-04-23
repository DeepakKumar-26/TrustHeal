import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dayToString, monthToString} from '../data/dateAndMonths';

const date = new Date();

export default function CardConsultation({item}) {
  const date = new Date(item.slotDate);
  const slotDate = date.toDateString();

  const timeString = time => {
    const [hour, minute] = time.split(':');
    const formateHour = (hour % 12 || 12).toString().padStart(2, '0');
    const formattedTime = `${formateHour}:${minute} ${
      hour >= 12 ? 'PM' : 'AM'
    } `;
    return formattedTime;
  };

  return (
    <View style={styles.cardConsultation}>
      {/* DOCTOR'S DETAILS */}
      <View style={styles.containerDrDetails}>
        <Image
          source={{
            uri: item?.photoPath,
          }}
          style={{height: '100%', width: 100}}
        />
        <View style={{flex: 1, padding: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Doctor : {item?.doctorName}
          </Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>Gender : Male</Text>

          {/* DOCTOR'S SPECIALITY */}
          <View style={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            {item.specialization.map((item, index) => (
              <View key={item + index} style={styles.btnSmall}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* APPOINTMENT DETAILS */}
      <View style={styles.containerAppointmentDetails}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="account" size={30} />
          <Text>Patient : {item.patientName}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="calendar-month" size={30} />
          <Text>{slotDate}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="alarm" size={30} />
          <Text>
            {timeString(item.slotStartTime)} |{' '}
            {item.consultationType.replace('_', ' ')}
          </Text>
        </View>
        {item.consultationType === 'PHYSICAL' && (
          <>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="hospital-building" size={30} />
              <Text>Clinic : Apollo Hospital</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="hospital-marker" size={30} />
              <Text>Address : Delhi</Text>
            </View>
          </>
        )}

        {/* OPTION BUTTONS */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            onPress={() => alert('Prescription')}
            style={styles.btnSmall}>
            <Text>Prescription</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('History')}
            style={styles.btnSmall}>
            <Text>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Invoices')}
            style={styles.btnSmall}>
            <Text>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Rate your experiences')}
            style={styles.btnSmall}>
            <Text>Rate your experiences</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAppointmentDetails: {
    backgroundColor: '#edf2f4',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 1,
    padding: 10,
  },
  btnSmall: {
    alignItems: 'center',
    alignSelf: 'baseline',
    backgroundColor: '#f1faee',
    borderRadius: 10,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  btnText: {
    alignSelf: 'center',
    color: 'white',
  },
  cardConsultation: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 3,
    elevation: 3,
  },
  containerDrDetails: {
    backgroundColor: '#e9edc9',
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    width: '100%',
    elevation: 3,
  },
});
