import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Apple = ({ route }) => {
  const { name, fatherName, motherName, phone, houseNo } = route.params;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDetails(!showDetails)} style={styles.box}>
        <Text style={styles.label}>Show Details</Text>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>

          <Text style={styles.label}>Father's Name:</Text>
          <Text style={styles.value}>{fatherName}</Text>

          <Text style={styles.label}>Mother's Name:</Text>
          <Text style={styles.value}>{motherName}</Text>

          <Text style={styles.label}>Mobile NO.:</Text>
          <Text style={styles.value}>{phone}</Text>

          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{houseNo}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  box: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    alignItems:"center",
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
  detailsContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

export default Apple;
