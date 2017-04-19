import React, { Component } from 'react';
import { View, Image, ScrollView, } from 'react-native';

class SlidingImageContainer extends Component {
  render(){
    return(
      <View style={{flex:1}}>
      <Image width='100%' height='100' source={this.props.image} style={{position:'absolute',top:0}}/>
      <ScrollView style={{flex:1,marginBottom:40}}>
        <View style={{marginTop:300,backgroundColor:'#fafafa'}}>
        {this.props.children}
        </View>
      </ScrollView>
      </View>
    )
  }
}

export default SlidingImageContainer
