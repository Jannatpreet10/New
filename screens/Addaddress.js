import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Alert } from 'react-native';
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const Addaddress = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, 'vaccinationDetails'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEntries(data);
    } catch (error) {
      console.error('Error fetching data from Firestore: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(FIRESTORE_DB, 'vaccinationDetails', id));
      setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
      Alert.alert('Success', 'Entry deleted successfully');
    } catch (error) {
      console.error('Error deleting entry: ', error);
      Alert.alert('Error', 'Failed to delete entry. Please try again later.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{item.email}</Text>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.text}>{item.address}</Text>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.text}>{item.chosenDate}</Text>
      <Pressable style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vaccination Entries:</Text>
      {entries.length > 0 ? (
        <FlatList
          data={entries}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <Text style={styles.text}>No entries available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  entryContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Addaddress;
