import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appointments} from '../../data/data';
import CardConsultation from '../../components/CardConsultation';
import ListEmpty from '../../components/ListEmpty';

export default function History() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [visible, setVisible] = useState(false);
  const [listItem, setListItem] = useState([]);

  const handleSearch = () => {
    const filteredList = appointments.filter(item =>
      item.patientName.toUpperCase().includes(searchKeyword.toUpperCase()),
    );
    setListItem(filteredList);
  };

  const handleSort = sortType => {
    const sortedList = listItem.sort((a, b) => {
      const dateA = new Date(`${a.slotDate}T${a.slotStartTime}`);
      const dateB = new Date(`${b.slotDate}T${b.slotStartTime}`);
      return sortType === 'ascending' ? dateA - dateB : dateB - dateA;
    });
    setVisible(!visible);
    setListItem(sortedList);
  };

  const ButtonSortType = ({title, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.btnSort}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchKeyword]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.searchbar}>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter name"
            onChangeText={text => setSearchKeyword(text)}
            value={searchKeyword}
            style={{flex: 1}}
          />
          <TouchableOpacity onPress={() => setSearchKeyword('')}>
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{paddingHorizontal: 5}}>
          <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Sort</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listItem}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <CardConsultation item={item} />}
        ItemSeparatorComponent={<View style={{height: 5}} />}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<ListEmpty />}
      />

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(!visible)}>
        <View style={styles.containerModal}>
          <View style={styles.btnGroup}>
            <ButtonSortType
              title="Ascending (Date & Time)"
              onPress={() => handleSort('ascending')}
            />
            <ButtonSortType
              title="Descending (Date & Time)"
              onPress={() => handleSort('descending')}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  btnGroup: {
    justifyContent: 'flex-end',
    backgroundColor: '#e9edc9',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnSort: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 2,
    elevation: 3,
    alignItems: 'center',
  },
  containerTextInput: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingRight: 10,
    overflow: 'hidden',
  },
  containerModal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(33,33,33,.7)',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'lightgrey',
    backgroundColor: '#e9edc9',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});
