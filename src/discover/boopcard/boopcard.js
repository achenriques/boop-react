import React, { Component } from 'react';
import {ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'
import Dimensions from 'Dimensions'
import placeholder from '../../assets/eventoPlaceholder.png'

class BoopCard extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ScrollView style={{flex:1,marginBottom:40}}>
        <Image source={placeholder} style={{flex:1}}/>
        <Text style={{color:'#000',fontSize:30,padding:30,paddingBottom:4,fontWeight:'800'}}>{this.props.data.nombre}</Text>
        <Text style={{color:'#000',fontSize:28,paddingLeft:30,fontWeight:'400'}}>{this.props.data.descripcion}</Text>
        <Space/>
        <Text style={{textAlign:'center',color:'#ff0000',fontSize:26,paddingLeft:30,fontWeight:'200'}}>dentro de 3 dias</Text>
        <Space/>
        <View style={likeButtons}>
          <DislikeButton onPress={this.props.onDislike}/>
          <LikeButton/>
        </View>
        <Space/>
      </ScrollView>
    )
  }
}

var likeButtons = {
  //position:'absolute',
  //bottom:0,
  flex:1,

  flexDirection:'row',
  justifyContent:'space-around',
  width: "100%",
}

export default BoopCard
