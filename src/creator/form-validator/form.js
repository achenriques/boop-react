import React, {Component} from "react"
import {TimePickerAndroid,DatePickerAndroid,ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {GrowingInput,DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'

class CreateForm extends Component {
  constructor(props){
    super(props)
    this.state = {error:'publish!',fecha:'fecha',hora:'hora',waiting:false}
    this.is_valid = true
  }

  manageDate = () => {
    DatePickerAndroid.open({date:new Date(),mode:'default'}).then( (data) => {
      if(data.action !== DatePickerAndroid.dismissedAction){
        this.date = data
        this.setState({fecha:`${data.day}/${data.month}/${data.year}`})
      }
    })
  }

  manageTime = () => {
    TimePickerAndroid.open({is24Hour:true}).then( (data) => {
      if(data.action !== TimePickerAndroid.dismissedAction){
        this.hour = data
        this.setState({hora:`${data.hour}:${data.minute}`})
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
    var is_ok = true
    is_ok = is_ok && this.state.title && this.short(this.state.title)
    is_ok = is_ok && this.state.description && this.long(this.state.description)
    is_ok = is_ok && this.state.place && this.too_short(this.state.place)
    is_ok = is_ok && this.date && this.hour
    if(is_ok){
      var toret = {
        title: this.state.title,
        description: this.state.description,
        place: this.state.place,
        date: new Date(this.date.year,
          this.date.month,
          this.date.day,
          this.hour.hour,
          this.hour.minute).getTime()
      }
      this.props.onPublish(toret)
    }else{
      alert('You must fill all fields, including date and hour')
    }
  }

  render(){
    return(
      <View style={{width:'100%',flex:1, justifyContent:'center',alignContent:'center'}}>

      <DefaultButton title={this.props.uploadStatus} onPress={this.props.onImageChange}/>

      <GrowingInput validate={this.short} value={this.state.title} placeholder='Title of your awesome event'
        onChange={(t)=> this.setState({title:t})} error='title must be between 6 and 20 letters' />

      <GrowingInput validate={this.long} value={this.state.description} placeholder='Tell us what we gonna do'
        onChange={(t)=> this.setState({description:t})} error='description must be >20 letters'/>

      <GrowingInput validate={this.too_short} value={this.state.place} placeholder='And where?'
        onChange={(t)=> this.setState({place:t})} error='location must be >6 letters'/>

      <DefaultButton title={this.state.fecha} onPress={this.manageDate}/>
      <DefaultButton title={this.state.hora} onPress={this.manageTime}/>
      <Space/>
      <PrimaryButton onPress={this.publish} title={this.state.error}/>
      <Space/>
      </View>
    )
  }
}

export default CreateForm
