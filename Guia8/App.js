/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StyleSheet,
   View,
 } from 'react-native';
 
 import Clima from './components/Formulario'
 
 export default function App() {
   return (
     <View style={styles.app}>
       <View style={styles.contenido}>
         <Clima/>
       </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   app:{
     flex:1,
     backgroundColor: 'rgb(71,149,212)',
     justifyContent: 'center',
   },
   contenido:{
     margin: '2.5%',
   },
 });
