import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';


class PrimaryButton extends Component {
  render(){
    return(
      <TouchableHighlight style={buttons.inputPrimary} onPress={this.props.onPress}>
      <Text style={{color:"#fff"}} >{this.props.title}</Text>
      </TouchableHighlight>
    )
  }
}

class DefaultButton extends Component {
  render(){
    return(
      <TouchableHighlight style={buttons.inputDefault} onPress={this.props.onPress}>
      <Text style={{color:"#000"}} >{this.props.title}</Text>
      </TouchableHighlight>
    )
  }
}

var buttons = StyleSheet.create({
  inputPrimary : {
    width:"80%",
    alignItems:"center",
    backgroundColor:"#FA705D",
    borderRadius:10,
    alignSelf:'center',
    margin:10,
    padding:15,
  },
  inputDefault : {
    width:"80%",
    alignItems:"center",
    alignSelf:'center',
    borderWidth:0.1,
    backgroundColor:"#fafafa",
    borderRadius:10,
    margin:10,
    padding:15,
  },
})

export {DefaultButton,PrimaryButton}
