import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './src/routes/stack';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#FFD634'} barStyle="light-content"/>
      <StackComponent />
    </NavigationContainer>
  );
}


