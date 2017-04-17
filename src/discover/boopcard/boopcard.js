import React, { Component } from 'react';
import {ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'
import placeholder from '../../assets/eventoPlaceholder.png'

class BoopCard extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={{width:'100%',flex:1}}>
      <Image width='100%' height='100' source={placeholder} style={{position:'absolute',top:0}}/>
        <ScrollView style={{flex:1,marginBottom:40}}>
          <View style={{marginTop:300,backgroundColor:'#fafafa'}}>
          <Text style={{color:'#000',fontSize:30,padding:30,paddingBottom:4,fontWeight:'800'}}>{this.props.data.nombre}</Text>
          <Text style={{color:'#000',fontSize:25,paddingLeft:30,fontWeight:'400'}}>{this.props.data.descripcion}</Text>
          <Space/>
          <Text style={{textAlign:'center',color:'#ff0000',fontSize:26,paddingLeft:30,fontWeight:'200'}}>dentro de 3 dias</Text>
          <View style={{height:250}}/>
          </View>
        </ScrollView>
        <View style={likeButtons}>
          <DislikeButton onPress={this.props.onDislike}/>
          <LikeButton/>
        </View>
      </View>
    )
  }
}

var likeButtons = {
  position:'absolute',
  bottom:75,
  flexDirection:'row',
  justifyContent:'space-around',
  width: "100%",
}

export default BoopCard
