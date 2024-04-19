import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FIRESTORE_DB } from "../FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HP = () => {
  const route = useRoute();
  const { email } = route.params;
  const [lastEntry, setLastEntry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(
        query(
          collection(FIRESTORE_DB, "vaccinationDetails"),
          where("email", "==", email)
        )
      );
      const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const lastEntry = fetchedData[fetchedData.length - 1];
      
      await AsyncStorage.setItem('lastEntry', JSON.stringify(lastEntry));
      
      setLastEntry(lastEntry);
      Alert.alert("Success", "Details fetched successfully!");
    } catch (error) {
      console.error("Error fetching data: ", error);
      Alert.alert("Error", "Failed to fetch details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registered Email:</Text>
      <Text style={styles.text}>{email}</Text>
      {loading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#FEBE10" />
      ) : (
        <View>
          <Text style={styles.heading}>Date for Vaccination:</Text>
          <Text style={styles.text}>{lastEntry ? lastEntry.chosenDate : 'N/A'}</Text>
        </View>
      )}
      <Pressable
        style={styles.button}
        onPress={fetchData}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Submit Details</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  loader: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FEBE10",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HP;
