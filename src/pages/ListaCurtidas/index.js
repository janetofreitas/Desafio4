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

        <Avatar source={{uri:"https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png"}}/>
        <Text style = {styles.text}
        onPress={() => navigation.navigate('Perfil2')}>Lucas curtiu!</Text>
        <Avatar source={{uri:"https://cdn.pixabay.com/photo/2018/10/05/22/01/avatar-3726951_960_720.png"}}/>
        <Text style = {styles.text}
        onPress={() => navigation.navigate('Perfil3')}>Jonas curtiu!</Text>
        <Avatar source={{uri:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"}}/>
        <Text style = {styles.text}
        onPress={() => navigation.navigate('Perfil')}>Pablo curtiu!</Text>
        <Avatar source={{uri:"https://cdn.pixabay.com/photo/2018/10/05/22/06/avatar-3726960_960_720.png"}}/>
        <Text style = {styles.text}
        onPress={() => navigation.navigate('Perfil')}>Alberto curtiu!</Text>
        <Avatar source={{uri:"https://cdn.pixabay.com/photo/2013/07/12/17/12/avatar-151779_960_720.png"}}/>
        <Text style = {styles.text}
        onPress={() => navigation.navigate('Perfil')}>Sandro curtiu!</Text>
        <Avatar source={{uri:"https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"}}/>
        <Text style = {styles.text}
        onPress={() => navigation.navigate('Perfil')}>Junior curtiu!</Text>
        <Avatar source={{uri:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"}}/>
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
          bottom: 41,
          left:33,
          padding: 15,
          margin: 1,
          fontWeight: 'bold',
          backgroundColor:'grey',
      },
      avatar: {
         bottom: 1
      }
})
