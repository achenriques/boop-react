import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';


class InputDefault extends Component {
  constructor(props){
    super(props)
    this.state = {error:'',style:style_input.inputDefault}
  }

  manage = (text) => {
    this.props.onChange(text)
    if(this.props.validate){
      if(this.props.validate(text)){
        this.setState({error:'',style:style_input.inputDefault})
        this.props.valid = this.props.valid && true
      }else{
        this.props.valid = false
        this.setState({error:this.props.error,style:style_input.inputError})
      }
    }
  }

  render(){
    return(
      <View style={{width:'80%'}}>
      <TextInput underlineColorAndroid='transparent'
        style={this.state.style}
        placeholder={this.props.placeholder}
        onChangeText={ this.manage } />
        <Text style={{color:'#ff0000',marginLeft:30}}>{this.state.error}</Text>
      </View>
    )
  }
}

class GrowingInput extends InputDefault {
  render(){
    return(
      <View style={{width:'80%',alignSelf:'center'}}>
      <AutoGrowingTextInput underlineColorAndroid='transparent'
        style={this.state.style}
        placeholder={this.props.placeholder}
        onChangeText={ this.manage } />
        <Text style={{color:'#ff0000',marginLeft:30}}>{this.state.error}</Text>
      </View>
    )
  }
}

var style_input = {
  inputDefault : {
    alignSelf:'center',
    width:"100%",
    borderWidth:0.1,
    borderRadius:10,
    margin:10,
    fontSize: 20,
    padding:15,
  },
  inputError : {
    alignSelf:'center',
    width:"100%",
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ff0000',
    margin:10,
    fontSize: 20,
    padding:15,
  }
}

export { InputDefault, GrowingInput }
