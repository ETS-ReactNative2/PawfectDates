import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from './screens/RegisterScreen';
import MessagesScreen from "./screens/MessagesScreen";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={NavTabs} />
      </Stack.Navigator>
    </NavigationContainer>

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
