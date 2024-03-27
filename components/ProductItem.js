import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductItem = ({ item }) => {
  return (
    <Pressable>
      <Image
        style={{ height: 150, width: 150, resizeMode: "contain" }}
        source={{ uri: item.image }}
      />
      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
        {item?.title}
      </Text>
      <View>
        <Text style={{ fontWeight: "bold" }}>${item?.price}</Text>
        <Text>{item?.rating?.rate}</Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "yellow",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
