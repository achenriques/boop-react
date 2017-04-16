import React, { Component } from 'react';
import {View, TouchableHighlight, Text, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

class LikeButton extends Component {
  render(){
    return(
        <TouchableHighlight onPress={this.props.onPress}>
        <View style={likeCnt}>
          <Icon name='heart' size={40} style={likeStyle}/>
        </View>
        </TouchableHighlight>
    )
  }
}

class DislikeButton extends Component {
  render(){
    return(
        <TouchableHighlight onPress={this.props.onPress}>
        <View style={dislikeCnt}>
          <Icon name='close' size={40} style={dislikeStyle}/>
        </View>
        </TouchableHighlight>
    )
  }
}

var likeStyle = {
  textAlignVertical:'center',
  width:40,
  height:40,
  color:'#fff',
  //color:"#FA705D",
  fontWeight:'900',
}

var likeCnt = {
  padding:20,
  borderRadius:100,
  backgroundColor:"#FA705D",
  //backgroundColor:'#fafafa',
}

var dislikeStyle = {
  textAlignVertical:'center',
  width:40,
  height:40,
  color:"#FA705D",
  fontWeight:'900',
}

var dislikeCnt = {
  borderWidth:0.4,
  padding:20,
  borderRadius:100,
  borderStyle:'dashed',
  backgroundColor:'#fafafa',
}

export {
  DislikeButton,
  LikeButton
}
