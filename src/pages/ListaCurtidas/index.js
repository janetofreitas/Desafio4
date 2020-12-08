import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList,Button , View, ScrollView, TextInput, Image, Text, SafeAreaView} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';
import like from '../../assets/baixados.png';
import { Icon,Avatar } from 'react-native-elements'



//import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';

export default function ListaCurtidas(props) {
    const { navigation } = props
    return (
        <ScrollView style = {styles.container}>
        <SafeAreaView>

        <Text style = {styles.text}>Pelé curtiu!</Text>
        <Text style = {styles.text}>Sua mãe curtiu!</Text>
        <Text style = {styles.text}>Seu Zeca curtiu!</Text>
        <Text style = {styles.text}>Naruto curtiu!</Text>
        <Text style = {styles.text}>Anti-cristo curtiu!</Text>
        <Text style = {styles.text}>Smiliguido curtiu!</Text>
        <Text style = {styles.text}
        onPress={() => navigation.navigate('Perfil')}>Você curtiu!</Text>
        </SafeAreaView>
        </ScrollView>
    )
  }
  
const styles = StyleSheet.create(
  {
      container: {
        flex: 1,
        
        margin:14
      },
      text : {
          backgroundColor: 'grey',
          padding: 15,
          margin: 1,
          fontWeight: 'bold',
      },
      avatar: {
         bottom: 1
      }
})
