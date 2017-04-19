import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';


class InputDefault extends Component {
  render(){
    return(
      <TextInput underlineColorAndroid='transparent' style={[style.inputDefault,this.props.style]} placeholder={this.props.placeholder}
        onChange={ this.props.onChangeText } />
    )
  }
}

var style = StyleSheet.create({
  inputDefault : {
    alignSelf:'center',
    width:"80%",
    borderWidth:0.1,
    borderRadius:10,
    margin:10,
    fontSize: 20,
    padding:15,
  }
})

export default InputDefault
