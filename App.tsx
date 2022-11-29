import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Mainsrn from './component/Homescreen/Main';
import Homescreen from './component/Airlines/Airlines';
import searchscreen from './component/SearchID/SearchID';
import Display from './component/SearchID/Display';
import Museum from './component/Museum/Museumhome';
import Museummain from './component/Museum/Museummain';
import Earthhome from './component/EarthQuake/Earthquakehome';
import Earthmain from './component/EarthQuake/Earthquakemain';
import Main from './component/Corona/Main';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "MainScreen" component = {Mainsrn}/>
      <Stack.Screen name = "HomeScreen" component = {Homescreen}/>
      <Stack.Screen name = "Searchscreen" component = {searchscreen}/>
      <Stack.Screen name = "Displayscreen" component = {Display}/>
      <Stack.Screen name = "Museumscreen" component = {Museum}/>
      <Stack.Screen name = "Museummainsrn" component = {Museummain}/>
      <Stack.Screen name = "Earthquakehome" component = {Earthhome}/>
      <Stack.Screen name = "Earthquakemain" component = {Earthmain}/>
      <Stack.Screen name = "Coronamain" component = {Main}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;

