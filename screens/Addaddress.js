import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";


const Addaddress = ({ navigation, route }) => {
    const [addresses, setAddresses] = useState([]);
                      
    useEffect(() => {
      // Check if there's a newAddress passed from the previous screen
      if (route.params?.newAddress) {
        // Add the new address to the addresses array
        setAddresses((prevAddresses) => [...prevAddresses, route.params.newAddress]);
      }
    }, [route.params?.newAddress]);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.searchBar}>
          <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
          <TextInput style={styles.searchInput} placeholder="Search amazon.in" />
        </Pressable>
        <Text style={styles.addAddressText}>Add an Address</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Your addresses</Text>
        <Pressable onPress={() => navigation.navigate("Buy")} style={styles.addAddressButton}>
          <Text>Add a new address</Text>
          <Entypo name="arrow-right" size={24} color="black" />
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Billa")}>
        <View style={styles.addressesContainer}>
          {addresses.map((address, index) => (
            <View key={index} style={styles.addressContainer}>
                <Entypo style={{color:"red"}} name="location" size={24} color="black" />
              <Text style={styles.addressText}>{address.name}</Text>
              <View style={{flexDirection:"row", gap:3}}>
              <Text style={styles.addressText}>{address.phone}</Text>
              <Text style={styles.addressText}>{address.houseNo}</Text>
              <View>
            <Pressable style={{backgroundColor:"#F5F5F5", paddingHorizontal:10, paddingVertical:6, borderRadius:5, borderWidth:0.9, borderColor:"#D0D0D0"}}>
            <Text>Edit</Text>
            </Pressable>
        </View>
        <View style={{flexDirection:"column"}}>
            <Pressable style={{backgroundColor:"#F5F5F5", paddingHorizontal:10, paddingVertical:6, borderRadius:5, borderWidth:0.9, borderColor:"#D0D0D0"}}>
            <Text>Delete</Text>
            </Pressable>
        </View>

              </View>
            </View>
          ))}
          
        </View>
       
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
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  searchInput: {
    width: "80%",
    height: "100%",
  },
  addAddressText: {
    marginLeft: 10,
  },
  content: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addAddressButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  addressesContainer: {
    marginTop: 10,
  },
  addressContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    padding: 10,
    borderRadius: 5,
    flexDirection:"row",
    gap:3,
  },
  addressText: {
    fontSize: 16,
  },
});

export default Addaddress;
