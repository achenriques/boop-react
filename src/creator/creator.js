// usa componentes nativos de android.

import React, { Component } from 'react';
import firebase from '../firebaseConfig';
import GeoFire from 'geofire';
import {TimePickerAndroid,DatePickerAndroid,ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../components/bundle'

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import placeholder from '../assets/eventoPlaceholder.png'

class Creator extends Component {
  constructor(props){
    super(props)
    this.state = {fecha:'fecha',hora:'hora'}
  }

  manageDate = () => {
    DatePickerAndroid.open({date:new Date(),mode:'default'}).then( (data) => {
      if(data.action !== DatePickerAndroid.dismissedAction){
        this.setState({fecha:`${data.day}/${data.month}/${data.year}`})
      }
    })
  }

  manageTime = () => {
    TimePickerAndroid.open({is24Hour:true}).then( (data) => {
      if(data.action !== TimePickerAndroid.dismissedAction){
        this.setState({hora:`${data.hour}:${data.minute}`})
      }
    })
  }

  render(){
    return(
      <ScrollView style={{width:'100%',flex:1,marginBottom:40}}>
        <View style={{width:'100%',flex:1, justifyContent:'center',alignContent:'center'}}>
        <Image source={placeholder} style={{flex:1}}/>
        <DefaultButton title='Cambiar imagen'/>
        <Space/>
        <Space/>
        <InputDefault placeholder='titulo'/>
        <AutoGrowingTextInput style={input} placeholder={'Descripcion'} />
        <AutoGrowingTextInput style={input} placeholder={'Lugar'} />
        <DefaultButton title={this.state.fecha} onPress={this.manageDate}/>
        <DefaultButton title={this.state.hora} onPress={this.manageTime}/>
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
