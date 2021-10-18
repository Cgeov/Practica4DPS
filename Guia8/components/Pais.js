import React,{useState} from "react";
import { Text, TextInput, View, StyleSheet, Image} from 'react-native';
import { Card } from 'react-native-elements';

function Pais(datos) {
  const { data } = datos;
  console.log(data[0].id.M49)
  var cod= "";

  if(data[0].id.M49 == 124){
    cod = "ca"
  }else if(data[0].id.M49 == 222){
    cod = "sv"
  }else if(data[0].id.M49 == 320){
    cod = "gt"
  }else if(data[0].id.M49 == 340){
    cod = "hn"
  }else if(data[0].id.M49 == 558){
    cod = "ni"
  }else if(data[0].id.M49 == 591){
    cod = "pa"
  }else if(data[0].id.M49 == 188){
    cod = "cr"
  }else if(data[0].id.M49 == 484){
    cod = "mx"
  }else if(data[0].id.M49 == 32){
    cod = "ar"
  }else if(data[0].id.M49 == 840){
    cod = "us"
  }else if(data[0].id.M49 == 170){
    cod = "co"
  }else if(data[0].id.M49 == 724){
    cod = "es"
  }else{
    cod = "pe"
  }

  const iconurl = "https://flagpedia.net/data/flags/normal/"+ cod +".png";
  return (
    <View>
        <React.Fragment>
          <Card>
          <Card.Title>{data[0].nome.abreviado}</Card.Title>
          <Card.Divider />
          <View style={{ justifyContent: 'center' }}>
          <Text>Capital: {data[0].governo.capital.nome}</Text>
          <Text>Region: {data[0].localizacao.regiao.nome}</Text>
          <Text>Lengua: {data[0].linguas[0].nome}</Text>
          <Text>Area: {data[0].area.total * 1000000} m²</Text>
          <Image style={styles.img} source = {{ uri: iconurl }} />
          </View>
          </Card>
        </React.Fragment>
    </View>
  );
}

const styles = StyleSheet.create({
  box:{
    backgroundColor: '#C7C7F2',
    padding: '2em 0',
    width: '300px',
    borderRadius: '3px',
    fontFamily: 'Roboto Slab, sans-serif',
    position: 'relative',
    marginLeft: 40,
    marginTop: 10,
    },
    img:{
    width: '155px',
    height: '90px',
    alignContent: 'center',
    alignItems: 'center',
    
    },

});

export default Pais;