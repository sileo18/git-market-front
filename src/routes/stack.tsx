import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import FriendList from '../screens/Friend';
import Friend from '../screens/Friend';
// import App from '../../App';
// import { AppRegistry } from 'react-native';



// function registerRootComponent(component: () => React.JSX.Element) {
//   AppRegistry.registerComponent('main', () => component);
// }

// registerRootComponent(App);

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Friend: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Friend' component={Friend} options={{headerShown: false}}/>
      </Stack.Navigator>
    
  );
}