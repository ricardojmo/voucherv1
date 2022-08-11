
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import COLORS from './src/const/colors';

const Stack = createStackNavigator();

import Homescreen from './src/view/screens/Homescreen';
import Detailscreen from './src/view/screens/Detailscreen';


const App = () => {
  return (
    <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
         <Stack.Screen name="HomeScreen" component={Homescreen} />
        <Stack.Screen name="Details" component={Detailscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;