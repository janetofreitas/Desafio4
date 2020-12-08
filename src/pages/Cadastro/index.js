import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, View, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';
import logo from '../../assets/instagram.png';
import {Input,Text,Button,Icon} from 'react-native-elements';




//import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';

export default function Cadastro(props) {
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { navigation } = props
    
    return(
        <View style = {styles.container}>
       
        <Text style = {styles.text}>Cadastro</Text>
    
        <TextInput
          style = {styles.input}
          onChangeText = {value => setEmail(value)}
          placeholder = "Usuario"
        /> 

        <TextInput
          style = {styles.input}
          onChangeText = {value => setEmail(value)}
          placeholder = "E-mail"
        /> 
 
        <TextInput
          style = {styles.input}
          secureTextEntry = {true}
          onChangeText = {value => setPassword(value)}
          placeholder = "Senha"
        />  
 
         <TouchableOpacity
         style = {styles.button}
         onPress={() => navigation.navigate('Login')}>
             <Text style = {styles.buttonText}>Cadastrar</Text>
         </TouchableOpacity>
     </View>
     );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   button: {
     width: 300,
     height: 42,
     marginTop: 10,
     borderRadius: 4,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#1A94E5'
     
     
   },
   input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor:'#D7CFCD',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
   },
   buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff'
   },
   logo: {
     bottom: 10, 
   },
   text: {
      fontWeight: 'bold',
      fontSize: 22,
      bottom: 15
   }
 });