import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';


class InputDefault extends Component {
  render(){
    return(
      <TextInput underlineColorAndroid='transparent' style={style.inputDefault} placeholder={this.props.placeholder}
        onChangeText={ this.props.onChange } />
    )
  }
}

var style = StyleSheet.create({
  inputDefault : {
    width:"80%",
    borderWidth:0.1,
    borderRadius:10,
    margin:10,
    fontSize: 20,
    padding:15,
  }
})

export default InputDefault
