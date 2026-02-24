import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './screens/LandingScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import EmployeeLoginScreen from './screens/EmployeeLoginScreen';
import AdminRegisterScreen from './screens/AdminRegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="EmployeeLogin" component={EmployeeLoginScreen} />
        <Stack.Screen name="AdminRegister" component={AdminRegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
