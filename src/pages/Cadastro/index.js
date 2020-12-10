import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, View, ScrollView, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';
import logo from '../../assets/instagram.png';
import {Input,Text,Button,Icon} from 'react-native-elements';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBpXJKGKHNVZDkF_VZtQcP5leYvWDuKIyM",
    authDomain: "desafio4-a07a1.firebaseapp.com",
    databaseURL: "https://desafio4-a07a1-default-rtdb.firebaseio.com",
    projectId: "desafio4-a07a1",
    storageBucket: "desafio4-a07a1.appspot.com",
    messagingSenderId: "957217691332",
    appId: "1:957217691332:web:e15eaf5b2e8237c76ddb91",
    measurementId: "G-WEEEG3CMST"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app();
}

export default class Cadastro extends React.Component {
    
  constructor(props){
    super(props)
    const { navigation } = props
    this.state = ({
      email: '',
      password: ''
    })
  }
  

  signUpUser = (email, password) => {

    try{
      if(this.state.password.length<6){
        alert("Minimo 6 digitos!")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email,password)

      Alert.alert(
        "Cadastro realizado com sucesso!",
        "",
        [
          { text: "OK", onPress: () => console.log("Confirmado") }
       ],
       { cancelable: false });

      }

      catch(error){
      console.log(error.toString())
      }
    
  }

  loginUser = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user)
      })
      }

      catch(error){
      console.log(error.toString())
      }
  }
  
    render(){
    return(
        <View style = {styles.container}>
       
        <Text style = {styles.text}>Cadastro</Text>

        <TextInput
          style = {styles.input}
          onChangeText = {email => this.setState({email})}
          placeholder = "E-mail"
        /> 
 
        <TextInput
          style = {styles.input}
          secureTextEntry = {true}
          onChangeText = {password => this.setState({password})}
          placeholder = "Senha"
        />  
 
         <TouchableOpacity
         style = {styles.button}
         onPress={() => this.signUpUser(this.state.email,this.state.password)}>
             <Text style = {styles.buttonText}>Cadastrar</Text>
         </TouchableOpacity>
     </View>
     );
 }
 
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
