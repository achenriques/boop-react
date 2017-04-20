// usa componentes nativos de android.

import React, { Component } from 'react';
import firebase from '../firebaseConfig';
import GeoFire from 'geofire';
import {Alert,TimePickerAndroid,DatePickerAndroid,ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../components/bundle'

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import CreateForm from './form-validator/form.js'
import placeholder from '../assets/eventoPlaceholder.png'
import SlidingImageContainer from '../components/slidingImageContainer'

class Creator extends Component {
  constructor(props){
    super(props)
    this.state = {fecha:'fecha',hora:'hora',waiting:false}
    this.b = {}
  }

  componentDidMount(){
    this.geoFire = new GeoFire(firebase.database().ref('locations'))
    navigator.geolocation.getCurrentPosition(this.onSuccessLocation, this.onErrorLocation, {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000} )
  }

  onSuccessLocation = (position) => {
    this.setState({latitude:position.coords.latitude, longitude:position.coords.longitude})
    this.boopInfo = firebase.database().ref('BoopInfo').push()
  }

  confirmPublish = () => {
    Alert.alert(
      'Publishing a new event',
      'Are you sure?',
      [
        {text: 'Ummm...', style: 'cancel'},
        {text: 'Yes', onPress: this.doPublish},
      ],
      { cancelable: true }
    )
  }

  doPublish = () => {
    this.boopInfo.set({
      title: this.b.title,
      description: this.b.title,
      place: this.b.place,
      date: new Date(this.state.fecha.year,
                    this.state.fecha.month,
                    this.state.fecha.day,
                    this.state.hora.hour,
                    this.state.hora.minute).getTime()
    })
    this.geoFire.set(this.boopInfo.key, [this.state.latitude, this.state.longitude])
  }

  render(){
    return(
      <SlidingImageContainer image={placeholder}>
        <CreateForm/>
      </SlidingImageContainer>
    )
  }
}

var input = {
  width:"80%",
  borderWidth:0.1,
  borderRadius:10,
  alignSelf:'center',
  margin:10,
  fontSize: 20,
  padding:15,
}

export default Creator
