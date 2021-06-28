/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function App(){
  const [count, setCount] = useState(0)

  function aumentar(){
    setCount(count + 1)
  };
  function diminuir(){
    if(count > 0){
      setCount(count - 1)
    };
  };
  return(
    <View style ={styles.container}>
      <View><Text style ={styles.text_titulo}>Contador de Pessoas</Text></View>
      <View style ={styles.cont}><Text style ={styles.text_cont}>{count}</Text></View>
      <TouchableOpacity style = {styles.buttons} onPress =  {aumentar}><Text style ={styles.text_button}>+</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.buttons} onPress = {diminuir}><Text style ={styles.text_button}>-</Text></TouchableOpacity>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(99, 106, 186)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cont: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 150,
    margin: 15,
    borderRadius: 10,
    
  },
  text_cont: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  text_titulo: {
    color: '#ffffff',
    fontSize: 25
  },
  text_button: {
    color: '#ffffff',
    fontSize: 40
  },
  buttons: {
    backgroundColor: '#2e2252',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 160,
    margin: 15
    
  }
});


