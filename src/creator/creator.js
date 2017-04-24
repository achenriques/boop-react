// usa componentes nativos de android.

import React, { Component } from 'react';
import firebase from '../firebaseConfig';
import GeoFire from 'geofire';
import {Alert,TimePickerAndroid,DatePickerAndroid,ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../components/bundle'

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import CreateForm from './form-validator/form.js'
import placeholder from '../assets/noimage.png'
import SlidingImageContainer from '../components/slidingImageContainer'

import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'react-native-fetch-blob'
import localizate from '../core/localizator'

const fs = RNFetchBlob.fs
const Blob = RNFetchBlob.polyfill.Blob

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

class Creator extends Component {
  constructor(props){
    super(props)
    this.state = {fecha:'fecha',hora:'hora',waiting:false,src:false,uploadStatus:'Click to change image'}
    this.b = {}
  }

  componentDidMount(){
    this.geoFire = new GeoFire(firebase.database().ref('locations'))
    localizate(firebase.auth().currentUser.uid).then(this.onSuccessLocation)
  }

  onSuccessLocation = (position) => {
    this.setState({latitude:position.latitude, longitude:position.longitude})
    this.boopInfo = firebase.database().ref('BoopInfo').push()
  }

  confirmPublish = (event) => {
    Alert.alert(
      'Publishing a new event',
      'Are you sure?',
      [
        {text: 'Ummm...', style: 'cancel'},
        {text: 'Yes', onPress: this.doPublish(event)},
      ],
      { cancelable: true }
    )
  }

  doPublish = (event) => {
    this.boopInfo.set(event)
    this.geoFire.set(this.boopInfo.key, [this.state.latitude, this.state.longitude])
  }

  managePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false
    }).then(image => {
      this.manageImage(image.path)
    });
  }

  manageImage = (path) => {
    p = RNFetchBlob.wrap(path,{type: 'image/png'})
    Blob.build(p).then((blob) => {
      firebase.storage().ref('images/'+this.boopInfo.key).put(blob,{contentType:'image/png'}).then(()=>{
        this.setState({src:this.boopInfo.key})
      })
    })
  }

  render(){
    return(
      <SlidingImageContainer src={this.state.src}>
        <CreateForm uploadStatus={this.state.uploadStatus} onImageChange={this.managePick} onPublish={this.confirmPublish}/>
      </SlidingImageContainer>
    )
  }
}

export default Creator
