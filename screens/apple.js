import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";
import { useRoute } from '@react-navigation/native';
import { FIRESTORE_DB } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const applescreen = () => {
  const route = useRoute();
  const {email, name, houseNo } = route.params;


  const [vaccinationCenter, setVaccinationCenter] = useState("");
  const [chosenDate, setChosenDate] = useState("");
  const navigation = useNavigation();

  // Function to save data to Firestore
  const saveDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(FIRESTORE_DB, "vaccinationDetails"), {
        name,
        houseNo,
        vaccinationCenter,
        chosenDate,
        email
      });
      console.log("Email getting", email);
      navigation.navigate('Billa',{email, chosenDate});
      console.log("Document written with ID: ", docRef.id);
      Alert.alert("Success", "Details submitted successfully!");
      
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert("Error", "Failed to submit details. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.dataContainer}>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.value}>--------------{houseNo},{email}</Text>
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 30,
          }}
        >
          <FontAwesome style={{marginLeft:10, marginRight:10}} name="hospital-o" size={24} color="black" />
          <TextInput
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: 14,
            }}
            placeholder="Choose the vaccination center"
            value={vaccinationCenter}
            onChangeText={setVaccinationCenter}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 30,
          }}
        >
          <AntDesign style={{marginLeft:10, marginRight:10}} name="calendar"  size={24} color="black" />
          <TextInput
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: 14,
            }}
            placeholder="Choose the date"
            value={chosenDate}
            onChangeText={setChosenDate}
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }} />
      <Pressable onPress={saveDataToFirestore} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  box: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    borderTopColor: "blue",
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#FFC72C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default applescreen;
