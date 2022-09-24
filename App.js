import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './screens/DetailScreen'
import MainScreen from './screens/MainScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator()


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Details" component={DetailScreen} options={{headerStyle:{backgroundColor:'#e60000'},headerTintColor:'white'}}/>
          <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
