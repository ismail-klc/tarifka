import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Categories from '../screens/Categories';
import Detail from '../screens/Detail';
import Meals from '../screens/Meals';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer >
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}