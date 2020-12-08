import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList,Button , View, ScrollView, TextInput, Image, Text, SafeAreaView,Header, TouchableOpacity} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';
import like from '../../assets/baixados.png';
import { Icon,Avatar } from 'react-native-elements'



//import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';

export default function Perfil(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'}}
          style={styles.prfilePicture}
        />
      </TouchableOpacity>

      <View style={styles.container2}>
        <View style={styles.container3}>
          <TouchableOpacity>
            <Text style={styles.numberContainer}>4</Text>
            <Text style={styles.text}>Publicações</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity>
            <Text style={styles.numberContainer}>260</Text>
            <Text style={styles.text}>Seguidores</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity>
            <Text style={styles.numberContainer}>100</Text>
            <Text style={styles.text}>Seguindo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginStart: 10,
        marginTop: 20,
        top: 490,
        right: 250
      }}>
      <View style={styles.container4}>
        <Text style={styles.nom}>Pablo</Text>
      </View>
      
        <Text style={{color: 'black', width: 200, left: 19, bottom:13}}>
          good vibes!
          
        </Text>

        <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2013/07/12/14/57/warrior-149098_1280.png'}}
          style={styles.img}
        />
        <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2020/05/16/18/28/dinosaur-5178645_1280.png'}}
          style={styles.img}
        />
        <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2017/08/27/16/55/angel-2686787_960_720.png'}}
          style={styles.img2}
        />
        <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2017/08/02/22/25/cat-2573708_1280.png'}}
          style={styles.img2}
        />
      </View>

    </View>
    

    
    )
  }
  
const styles = StyleSheet.create(
  {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        bottom: 400
      },
      prfilePicture: {
        height: 80,
        width: 80,
        borderRadius: 100,
        marginLeft: 20,
        top: 420
      },
      numberContainer: {
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 15,
      },
      container2: {
        flex: 4,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginEnd: 10,
      },
      text: {
        color: 'black',
        //fontWeight: 'bold',
        alignSelf: 'center',
      },
      container3: {
        flexDirection: 'column-reverse',
        flex: 1,
        left: 26,
        bottom: 440,
        justifyContent: 'space-between',
      },
      nom: {
        color: 'black',
         fontWeight: 'bold',
          fontSize: 20
      },
      container4: {
        bottom: 15,
        left:20
      },
      img: {
        height: 190,
        width: 210,
        borderRadius: 0,
        marginLeft: 20,
        top: 50,
        right: 125,
        borderColor: 'black',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,

      },
      img2: {
        height: 190,
        width: 210,
        borderRadius: 0,
        marginLeft: 20,
        bottom: 330,
        left: 85,
        borderColor: 'black',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,

      }
})
