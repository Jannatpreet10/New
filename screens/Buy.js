import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, Alert } from "react-native";

const Buy = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [houseNo, setHouseNo] = useState("");

  const handleAddAddress = () => {
    // Validate input fields
    if (!name || !phone || !houseNo) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Construct the new address object
    const newAddress = {
      name: name,
      phone: phone,
      houseNo: houseNo,
    };

    // Pass the new address back to the previous screen
    navigation.navigate("Address", { newAddress: newAddress });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Add a new address</Text>
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
          <Text style={styles.label}>Mobile NO.</Text>
          <TextInput
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={styles.input}
            placeholder="Enter Your Mobile No."
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Flat, House Number, Building, Company</Text>
          <TextInput
            value={houseNo}
            onChangeText={(text) => setHouseNo(text)}
            style={styles.input}
            placeholder="Enter Your street Number"
          />
        </View>
        <Pressable onPress={(handleAddAddress)} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Address</Text>
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

export default Buy;
