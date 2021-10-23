import * as React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from './screens/RegisterScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator 
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Swipe") {
          iconName = focused ? "home" : "home-outline"
        } else if (route.name === "Messages") {
          iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"
        } else if (route.name === "Profile") {
          iconName = focused ? "settings" : "settings-outline"
        }
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
      tabBarActiveTintColor: "salmon",
      tabBarInactiveTintColor: "gray"
    })}>
        <Tab.Screen name="Swipe" component={HomeScreen} options={{ headerShown: false, tabBarLabel: ""}} />
        <Tab.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false, tabBarLabel: ""}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, tabBarLabel: ""}} />
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={NavTabs} />
      <Stack.Screen options={{ headerTitle: "", headerTransparent: true }} name="Register" component={RegisterScreen} />
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
