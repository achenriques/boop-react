import React, { Component } from 'react';
import {View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class NavigatorItem extends Component {
  render(){
    if(this.props.isSelected){
      this.color = "#FA705D"
    } else {
      this.color = '#c0c0c0'
    }
    return(
      <View>
      <TouchableHighlight onPress={() => {this.props.navigate(this.props.id)}}>
        <Icon name={this.props.icon} size={30} style={{padding:15,color:this.color}}/>
      </TouchableHighlight>
      </View>
    )
  }
}

export default NavigatorItem
