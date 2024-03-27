import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductinfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const height = (width * 100) / 100;

  return (
    <ScrollView
      style={{ marginTop: 45, flex: 1, backgroundColor: "white" }}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "#00CED1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={24}
            color="black"
          />
          <TextInput
            style={{ width: "80%", height: "100%" }}
            placeholder="Search amazon.in"
          />
        </Pressable>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          style={{ height: 200, width: 200 }}
          source={{
            uri:
              "https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra-PNG-Background.webp",
          }}
        />
        <Pressable
        onPress={()=>navigation.navigate("Buy")}
          style={{
            marginTop: 20,
            backgroundColor: "#FFD700",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Add to Cart</Text>
        </Pressable>
      </View>
   
    </ScrollView>
  );
};

export default ProductinfoScreen;

const styles = StyleSheet.create({});
