import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
import ArticleScreens from '../screens/ArticleScreen';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="北岡のニュース" component={HomeScreens} />
        <Stack.Screen name="Article" component={ArticleScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
