import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, Alert } from "react-native";

const yoman = ({ navigation }) => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState(""); // Added state for father's name
  const [motherName, setMotherName] = useState(""); // Added state for mother's name
  const [phone, setPhone] = useState("");
  const [houseNo, setHouseNo] = useState("");

  const submitDetails = () => {
    // Validate if all fields are filled
    if (name === "" || fatherName === "" || motherName === "" || phone === "" || houseNo === "") {
      Alert.alert("Please fill in all fields");
      return;
    }

    // Pass details to the next screen
    navigation.navigate('Jannat', {
      name,
      fatherName,
      motherName,
      phone,
      houseNo,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Add your Details Please</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full name(First and last)</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder="Enter your Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter your father's name</Text>
          <TextInput
            value={fatherName}
            onChangeText={(text) => setFatherName(text)}
            style={styles.input}
            placeholder="Your father's name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter you mother's name</Text>
          <TextInput
            value={motherName}
            onChangeText={(text) => setMotherName(text)}
            style={styles.input}
            placeholder="Your mother's name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile NO.</Text>
          <TextInput
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={styles.input}
            placeholder="Enter Your Mobile No."
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Where do you live</Text>
          <TextInput
            value={houseNo}
            onChangeText={(text) => setHouseNo(text)}
            style={styles.input}
            placeholder="Write your address"
          />
        </View>
        <Pressable onPress={submitDetails} style={styles.addButton}>
          <Text style={styles.addButtonText}>Submit your Details</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    height: 50,
    backgroundColor: "#00CED1",
  },
  content: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#FFC72C",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    fontWeight: "bold",
  },
});

export default yoman;
