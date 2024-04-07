import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { FIRESTORE_DB } from "../FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const HP = () => {
  const route = useRoute();
  const { email, chosenDate } = route.params;
  const [lastEntry, setLastEntry] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(FIRESTORE_DB, "vaccinationDetails"),
          where("email", "==", email)
        )
      );
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      const dataLength = fetchedData.length;
      if (dataLength > 0) {
        setLastEntry(fetchedData[dataLength - 1]);
      } else {
        setLastEntry(null);
      }
      Alert.alert("Success", "Details fetched successfully!");
    } catch (error) {
      console.error("Error fetching data: ", error);
      Alert.alert("Error", "Failed to fetch details. Please try again later.");
    }
  };

  return (
    <View>
      <View style={{ alignContent: "center", alignItems: "center", marginTop: 150 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold", alignItems: "center", marginTop: 20 }}>
          Here is your Registered Email: {email}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold", alignItems: "center", marginTop: 50 }}>
          The Date for your vaccination is {lastEntry ? lastEntry.chosenDate : 'N/A'}
        </Text>
      </View>
      <Pressable
        style={{
          width: 200,
          backgroundColor: "#FEBE10",
          borderRadius: 6,
          marginRight: "auto",
          marginLeft: "auto",
          padding: 15,
          marginTop: 70,
        }}
        onPress={fetchData}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>
          Submit Details
        </Text>
      </Pressable>
    </View>
  );
};

export default HP;

const styles = StyleSheet.create({});
