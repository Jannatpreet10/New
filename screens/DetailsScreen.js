import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { MaterialCommunityIcons, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const DetailsScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [errormsg, setErrormsg] = useState(null);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signUp = async () => {
    try {
      // Check if name, email, password, and dob are provided
      if (!name || !email || !password || !dob) {
        setErrormsg("Please fill in all fields");
        return;
      }

      // Create user with email and password
      const response = await createUserWithEmailAndPassword(auth, email, password);
      
      // Navigate to the next screen upon successful signup
      navigation.navigate("Kollu",{email});
    } catch (error) {
      console.error(error);
      Alert.alert("Signup failed", error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View>
        <Image
          style={{
            width: 350,
            height: 100,
            resizeMode: "cover",
            marginTop: 10,
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
              alignItems: "center",
            }}
          >
            Register to your account
          </Text>
        </View>
        {
          errormsg ? <Text style={{ color: "red" }}>{errormsg}</Text> : null
        }
        <View style={styles.inputContainer}>
          <AntDesign style={styles.icon} name="contacts" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            onFocus={() => setErrormsg(null)}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons style={styles.icon} name="email" size={24} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Enter your e-mail"
            onFocus={() => setErrormsg(null)}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign style={styles.icon} name="calendar" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Enter your Date of Birth"
            onFocus={() => setErrormsg(null)}
            onChangeText={(text) => setDob(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Feather style={styles.icon} name="lock" size={24} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onFocus={() => setErrormsg(null)}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Forgot password</Text>
        </View>
        <View style={{ marginTop: 70 }} />
        <Pressable onPress={signUp} style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Home")} style={{ marginTop: 15 }}>
          <Text style={styles.linkText}>Already have an account</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    marginLeft: 15,
  },
  linkContainer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkText: {
    color: "#007FFF",
    fontWeight: "500",
  },
  button: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginRight: "auto",
    marginLeft: "auto",
    padding: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailsScreen;
