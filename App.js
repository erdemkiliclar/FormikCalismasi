import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { SingUp } from './src/screens/SingUp';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"


export default function App() {
  const Stack = createStackNavigator()

  return (
 <NavigationContainer >
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="SignUp" component={SingUp} options={{headerShown:false}}/>
  </Stack.Navigator>
     
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
