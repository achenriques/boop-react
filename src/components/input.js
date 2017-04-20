import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AutoGrowingTextInput} from 'react-native-autogrow-textinput';


class InputDefault extends Component {
  constructor(props){
    super(props)
    this.state = {error:'',style:style.inputDefault}
  }

  manage = (text) => {
    this.props.onChange(text)
    if(this.props.validate){
      if(this.props.validate(text)){
        this.setState({error:'',style:style.inputDefault})
        this.props.valid = this.props.valid && true
      }else{
        this.props.valid = false
        this.setState({error:this.props.error,style:style.inputError})
      }
    }
  }

  render(){
    return(
      <View>
      <AutoGrowingTextInput underlineColorAndroid='transparent'
        style={[this.state.style,this.props.style]}
        placeholder={this.props.placeholder}
        onChangeText={ this.manage } />
        <Text style={{color:'#ff0000',marginLeft:30}}>{this.state.error}</Text>
      </View>
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
  },
  inputError : {
    alignSelf:'center',
    width:"80%",
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ff0000',
    margin:10,
    fontSize: 20,
    padding:15,
  }
})

export default InputDefault
