import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="北岡のニュース" component={HomeScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
