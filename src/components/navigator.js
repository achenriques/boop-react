import React, { Component } from 'react';
import {View, TouchableHighlight, Text, StyleSheet } from 'react-native';

class NavigatorBar extends Component {
  render(){
    return(
      <View style={s} onPress={() => {this.props.navigate(this.props.id)}}>
        {this.props.children}
      </View>
    )
  }
}

var s = {
  position:'absolute',
  height: 60,
  flex:1,
  bottom:0,
  flexDirection:'row',
  justifyContent:'space-around',
  width: "100%",
  //justifyContent : 'bottom',
  backgroundColor : '#fff',
}

export default NavigatorBar
