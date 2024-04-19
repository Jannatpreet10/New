import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signIn = async () => {
    try {
      if (isAdmin && email === 'admin@example.com' && adminPassword === 'admin123') {
        setIsAdmin(true);
        navigation.navigate('Address');
      } else {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
        navigation.navigate('Billa', { email });
      }
    } catch (error) {
      console.log(error);
      alert('Login failed')
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    // Check if the entered email is the admin's email
    if (text.toLowerCase() === 'admin@example.com') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ position: 'relative', alignItems: "center" }}>
        <Image
          style={{ width: 350, height: 200, resizeMode: 'cover', marginTop: 10 }}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg',
          }}
        />
        <Text
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{ translateX: -175 }, { translateY: -25 }],
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Login to your account
        </Text>
      </View>

      <KeyboardAvoidingView>
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
            <MaterialCommunityIcons
              style={{ marginLeft: 18 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 14,
              }}
              placeholder="Enter your e-mail"
              onChangeText={(text) => handleEmailChange(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
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
            <Feather
              style={{ marginLeft: 18 }}
              name="lock"
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 14,
              }}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        {isAdmin && (
          <View style={{ marginTop: 10 }}>
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
              <Feather
                style={{ marginLeft: 18 }}
                name="lock"
                size={24}
                color="gray"
              />
              <TextInput
                value={adminPassword}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: 14,
                }}
                placeholder="Enter admin password"
                secureTextEntry={true}
                onChangeText={(text) => setAdminPassword(text)}
              />
            </View>
          </View>
        )}
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in </Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot pass</Text>
        </View>
        <View style={{ marginTop: 70 }} />
        <Pressable
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginRight: "auto",
            marginLeft: "auto",
            padding: 15,
          }}
          onPress={signIn}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
          style={{ marginTop: 15 }}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={{ textAlign: "center", color: "#007FFF" }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
