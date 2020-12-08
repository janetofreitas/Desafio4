import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Feed from './src/pages/Feed';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import ListaComentario from './src/pages/ListaComentario';
import { Assets, createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import logo from './src/assets/instagram.png';
const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{headerTitle: () => <Image source = {logo} />}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="ListaComentario" component={ListaComentario} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)


