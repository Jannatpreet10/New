import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import yoman from './screens/yoman';
const Stack = createStackNavigator();
import { StyleSheet, Text, View } from 'react-native';
import ProductinfoScreen from './screens/ProductinfoScreen';
import Buy from './screens/Buy';
import don from './screens/HP'
import { ModalPortal } from 'react-native-modals';
import Addaddress from './screens/Addaddress';
import apple from './screens/apple';
export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="Details" options={{headerShown:false}} component={DetailsScreen} />
        <Stack.Screen name="Kollu" options={{headerShown:false}} component={yoman} />
        <Stack.Screen name="Info" component={ProductinfoScreen}/>
        <Stack.Screen name="Buy" options={{headerShown:false}} component={Buy}/>
        <Stack.Screen name="Address" options={{headerShown:false}} component={Addaddress}/>
        <Stack.Screen name="Billa" options={{headerShown:false}} component={don}/>
        <Stack.Screen name='Jannat' options={{headerShown:false}} component={apple}/>
      </Stack.Navigator>
    </NavigationContainer>
    <ModalPortal/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
