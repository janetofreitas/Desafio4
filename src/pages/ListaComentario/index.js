import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList,Button , View, ScrollView, TextInput, Image, Text} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';
import like from '../../assets/baixados.png';
import { Icon } from 'react-native-elements'


import { Container, Post, Header, Avatar, Name, Description, Loading, Coment } from './styles';

export default function ListaComentario(props) {
    
    const [error, setError] = useState('');
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('')
  const [comentarios, setComentarios] = useState([])
  const { navigation } = props

  const MAX_LENGTH = 250;

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);
    //http://localhost:3000/feed?_expand=author&_limit=4&_page=1
    //utilizar server.js no jsonserver
    //https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=1&limit=4
    //utilizar o server2.js no www.mockapi.io
    axios
    .get(`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=1&limit=1`)
    .then(response => {
      const totalItems = response.headers["x-total-count"]
      const data = response.data
      //console.log(data)
      setLoading(false)
      setTotal(Math.floor(totalItems / 4));
      setPage(pageNumber + 1);
      setFeed(shouldRefresh ? data : [...feed, ...data]);
    })
    .catch(err => {
      setError(err.message);
      setLoading(true)
    })
  }

  async function refreshList() {
    setRefreshing(true);
    
    await loadPage(1, true);

    setRefreshing(false);
  }

  const onGet = (id) => {
    try {

      const value = AsyncStorage.getItem(id);

      if (value !== null) {
        // We have data!!
        setComentarios(value)
      } 
    } catch (error) {
      // Error saving data
    }
  }

  const onSave = async (id) => {
    try {
      await AsyncStorage.setItem(id, text);
      setComentarios([...comentarios, ...text + "\n"])
    } catch (error) {
      // Error saving data
    }
  }

    

  useEffect(() => {
    loadPage()
  }, []);

 

  const renderItem = ({item}) => {
    return (
      <Post>
            <Coment style = {styles.teste}>
            <Name style = {styles.name}>{"Caio"}</Name> {"Daora pivete ! \n"}
            
            <Name style = {styles.name}>{"LuanGameplays"}</Name> {"Maneiro dms \n"}

            <Name style = {styles.name}>{"Yoda"}</Name> {"FON \n"}

            <Name style = {styles.name}>{"Jovirone"}</Name> {"DALE DELE DELE DOLE \n"}

            <Name style = {styles.name}>{"Gaules"}</Name> {"RERUM RERUM RERUN \n"}

            <Name style = {styles.name}>{"SMurf do Muca"}</Name> {"Codigin \n"}

            <Name style = {styles.name}>{"Aristoteles"}</Name> {"Um trabalho tão facil desse... \n"}

            </Coment>
            <Description>
              {comentarios}
            </Description>
            <View style={styles.container}>

              <View style={styles.comentario}>
                    <TextInput
                      multiline={true}
                      onChangeText={(text) => setText(text)}
                      placeholder={"Comentar..."}
                      style={[styles.text]}
                      maxLength={MAX_LENGTH}
                      value={text}/>
                  
                    <View style={styles.botao}>
                    
                    <Button
                      title="Publicar"
                      onPress={() => onSave(String(item.id))}
                      accessibilityLabel="Publicar">
                    </Button> 

              </View>
              </View>

            </View>
            
            {/* <Description>
              {comentarios}
            </Description>
           

            <TextInput
              multiline={true}
              onChangeText={(text) => setText(text)}
              placeholder={"Comentários"}
              style={[styles.text]}
              maxLength={MAX_LENGTH}
              value={text}/>

            <Button
              title="Salvar"
              onPress={() => onSave(String(item.id))}
              accessibilityLabel="Salvar">
            </Button> */}

      </Post>
    )
  }
  
  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <FlatList
        key="list"
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        
      />
    </Container>
  );
}

const styles = StyleSheet.create(
  {text: {
    fontSize: 30,
    lineHeight: 33,
    padding: 10,
    paddingTop: 16,
    minHeight: 50,
    borderTopWidth: 1,
    borderColor: "rgba(212,211,211, 0.3)",
    color:"rgb(80,79,80)"
},
like: {
  padding: 5,
  right: 0,
  margin: 0,
  paddingLeft:1,
},
comment: {
  bottom: 2,
  left: 0,
  padding: 5
},
name: {
  
},
teste:{
  padding: 5
},
comentario: {
  flexDirection: "row",
  width: 180,

},
botao: {
  
  justifyContent: "center",
  width: 100,
  left: 48
},
container:{
  marginTop: 10,
  marginLeft: 10,
  marginBottom: 10,
  marginRight: 10,
  backgroundColor: '#C0C0C0',
  borderTopWidth: 0,
  borderBottomWidth: 0
}
})
