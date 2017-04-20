import React, {Component} from "react"
import {TimePickerAndroid,DatePickerAndroid,ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

class CreateForm extends Component {
  constructor(props){
    super(props)
    this.state = {error:'publish!',fecha:'fecha',hora:'hora',waiting:false}
  }

  manageDate = () => {
    DatePickerAndroid.open({date:new Date(),mode:'default'}).then( (data) => {
      if(data.action !== DatePickerAndroid.dismissedAction){
        this.setState({fecha:data})
      }
    })
  }

  manageTime = () => {
    TimePickerAndroid.open({is24Hour:true}).then( (data) => {
      if(data.action !== TimePickerAndroid.dismissedAction){
        this.setState({hora:data})
      }
    })
  }

  short = (text) => {
    return text.length > 6 && text.length < 20
  }

  long = (text) => {
    return text.length > 20
  }

  too_short = (text) => {
    return text.length > 6
  }

  publish = () => {
    if(this.valid()){
      this.props.onPublish(this.state)
    }
  }

  render(){
    return(
      <View style={{width:'100%',flex:1, justifyContent:'center',alignContent:'center'}}>

      <InputDefault valid={this.is_valid} validate={this.short} placeholder='Title of your awesome event'
        onChange={(t)=> this.setState({title:t})} error='title must be between 6 and 20 letters' />
      <InputDefault valid={this.is_valid} validate={this.long} placeholder='Tell us what we gonna do'
        onChange={(t)=> this.setState({description:t})} error='description must be >20 letters'/>
      <InputDefault valid={this.is_valid} validate={this.too_short} placeholder='And where?'
        onChange={(t)=> this.setState({place:t})} error='location must be >6 letters'/>

      <DefaultButton title={this.state.fecha} onPress={this.manageDate}/>
      <DefaultButton title={this.state.hora} onPress={this.manageTime}/>
      <Space/>
      <PrimaryButton disabled={!this.is_valid} onPress={this.publish} title={this.state.error}/>
      <Space/>
      </View>
    )
  }
}

export default CreateForm
