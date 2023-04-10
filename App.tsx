import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './app/screens/main/main.screen';
import LoginScreen from './app/screens/login/login.screen';
import {FloatingAction} from 'react-native-floating-action';
const HomeStack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Login">
        <HomeStack.Screen name="Login" component={LoginScreen} />
        <HomeStack.Screen name="Main" component={MainScreen} />
      </HomeStack.Navigator>
      <FloatingAction color="rgb(192,190,193)" />
    </NavigationContainer>
  );
}

export default App;
