import React, { Component } from 'react';
import {View, TouchableHighlight, Text, StyleSheet,Image } from 'react-native';
import arrowImage from '../assets/backArrow.png'

class BackButton extends Component {
  render(){
    return(
      <View style={{top:16,left:16,width:'100%',marginBottom:15}}>
        <TouchableHighlight onPress={this.props.onPress}>
          <Image style={{width:30,height:30}} source={arrowImage}/>
        </TouchableHighlight>
      </View>
    )
  }
}

export default BackButton
