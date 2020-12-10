import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, View, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';
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





//import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';

export default class Login extends React.Component {
    
    constructor(props){
      super(props)
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
        }

        catch(error){
        console.log(error.toString())
        }
      
    }

    loginUser = (email, password) => {
      try{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          () => this.props.navigation.navigate('Feed')
        )
        }

        catch(error){
        console.log(error.toString())
        }
    }
    render(){
    return(
    <View style = {styles.container}>
       
       <Image
       source = {require('../../assets/instagram.png')}
       style = {styles.logo}/>
       <TextInput
         style = {styles.input}
         onChangeText = {email => this.setState({email})}
         placeholder = "Digite seu e-mail!"
       />  

       <TextInput
         style = {styles.input}
         secureTextEntry = {true}
         onChangeText = {password => this.setState({password})}
         placeholder = "Digite sua senha!"
       />  

        <TouchableOpacity
        style = {styles.button}
        onPress={() => this.loginUser(this.state.email,this.state.password)}>
            <Text style = {styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style = {styles.button}
        onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style = {styles.buttonText}>Não tem uma conta? Cadastre-se!</Text>
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
    
    
      
  }
});