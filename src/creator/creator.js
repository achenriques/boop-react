import React, { Component } from 'react';
import firebase from '../firebaseConfig';
import GeoFire from 'geofire';

import {ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../components/bundle'

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import placeholder from '../assets/eventoPlaceholder.png'

class Creator extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ScrollView style={{width:'100%',flex:1,marginBottom:40}}>
        <View style={{width:'100%',flex:1, justifyContent:'center',alignContent:'center'}}>
        <Image source={placeholder} style={{flex:1}}/>
        <Space/>
        <DefaultButton title='Cambiar imagen'/>
        <Space/>
        <InputDefault placeholder='titulo'/>
        <AutoGrowingTextInput style={input} placeholder={'Descripcion'} />
        <AutoGrowingTextInput style={input} placeholder={'Lugar'} />
        <InputDefault placeholder='horario'/>
        <Space/>
        <PrimaryButton title='publicar'/>
        <Space/>
        </View>
      </ScrollView>
    )
  }
}

var input = {
  width:"80%",
  borderWidth:0.1,
  borderRadius:10,
  alignSelf:'center',
  margin:10,
  fontSize: 20,
  padding:15,
}

export default Creator
