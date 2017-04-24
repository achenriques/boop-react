import React, { Component } from 'react';
import { View, Image, ScrollView, } from 'react-native';
import ImageFromStorage from './imageFromStorage';
import placeholder from '../assets/noimage.png';

class SlidingImageContainer extends Component {
  render(){
    return(
      <View style={{flex:1}}>
        <ImageFromStorage src={this.props.src} loading={placeholder} style={{position:'absolute',top:0,width:'100%',height:330}}/>
        <ScrollView style={{flex:1,marginBottom:40}}>
          <View style={{marginTop:330,backgroundColor:'#fafafa'}}>
          {this.props.children}
          </View>
        </ScrollView>

      </View>
    )
  }
}

export default SlidingImageContainer
