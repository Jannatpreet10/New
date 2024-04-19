  import React, { useState } from "react";
  import { StyleSheet, Text, View, TextInput, Pressable, Alert, Modal, ScrollView } from "react-native";
  import { useRoute } from '@react-navigation/native';
  import { FIRESTORE_DB } from "../FirebaseConfig";
  import { collection, addDoc } from "firebase/firestore"; 
  import { FontAwesome } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';
  import { useNavigation } from "@react-navigation/native";

  const Applescreen = () => {
    const route = useRoute();
    const { email, name, houseNo } = route.params;

    const [vaccinationCenter, setVaccinationCenter] = useState("");
    const [chosenDate, setChosenDate] = useState("");
    const [selectedNames, setSelectedNames] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();

    const names = ["Raikot", "Barnala", "Ludhiana", "Bathinda", "Sangrur", "Handiaya"]; // Sample list of names

    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };

    const toggleNameSelection = (name) => {

      if (selectedNames.includes(name)) {
        setSelectedNames(selectedNames.filter((n) => n !== name));
        setVaccinationCenter("");
      } else {
        setSelectedNames([name]);
        setVaccinationCenter(name);
      }           
    };

    const saveDataToFirestore = async () => {
      try {
        const docRef = await addDoc(collection(FIRESTORE_DB, "vaccinationDetails"), {
          name,
          houseNo,         
          vaccinationCenter,
          chosenDate,
          email,
          selectedNames
        });
        navigation.navigate('Billa',{email, chosenDate});
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
          <Pressable onPress={toggleModal} style={styles.centerContainer}>
            <FontAwesome style={{marginLeft:10, marginRight:10}} name="hospital-o" size={24} color="black" />
            <Text style={styles.centerText}>{vaccinationCenter ? vaccinationCenter : "Choose the vaccination center"}</Text>
          </Pressable>
          <View style={styles.inputContainer}>
            <AntDesign style={{marginLeft:10, marginRight:10}} name="calendar"  size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Choose the date (DD-MM-YYYY)"
              value={chosenDate}
              onChangeText={setChosenDate}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }} />
        <Pressable onPress={saveDataToFirestore} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Names</Text>
              <ScrollView>
                {names.map((name) => (
                  <Pressable
                    key={name}
                    style={[styles.nameItem, selectedNames.includes(name) && styles.selectedNameItem]}
                    onPress={() => toggleNameSelection(name)}
                  >
                    <Text style={styles.nameText}>{name}</Text>
                  </Pressable>
                ))}
              </ScrollView>
              <Pressable onPress={toggleModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    centerContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: "#D0D0D0",
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 30,
    },
    centerText: {
      color: "gray",
      marginVertical: 10,
      width: 300,
      fontSize: 14,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: "#D0D0D0",
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 30,
    },
    input: {
      color: "gray",
      marginVertical: 10,
      width: 300,
      fontSize: 14,
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
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      maxHeight: "80%",
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    nameItem: {
      padding: 10,
      marginBottom: 5,
      borderRadius: 5,
    },
    selectedNameItem: {
      backgroundColor: "#007BFF",
    },
    nameText: {
      color: "black",
      fontSize: 16,
    },
    closeButton: {
      backgroundColor: "#FFC72C",
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    closeButtonText: {
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
    },
  });

  export default Applescreen;
