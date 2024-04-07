import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
const kok = () => {
    const route = useRoute();
  const { email } = route.params;
  return (
    <View>
      <Text>kok,{email}</Text>
    </View>
  )
}

export default kok

const styles = StyleSheet.create({})