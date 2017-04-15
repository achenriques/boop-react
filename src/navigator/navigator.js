import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import NavigatorItem from '../components/navigator_item';
import NavigatorBar from '../components/navigator';

class Navigator extends Component {
  constructor(props){
    super(props)
    this.state = {navigate:''}
  }

  navigateTo = (id) => {
    this.setState({navigate:id})
  }
  
  render(){
    return(
      <View style={{width:'100%',height:'100%'}}>
        <Text>{this.state.navigate}</Text>
        <NavigatorBar>
          <NavigatorItem id="discover" navigate={this.navigateTo} icon="ios-compass-outline"/>
          <NavigatorItem id="chats" navigate={this.navigateTo} icon="ios-chatbubbles-outline"/>
          <NavigatorItem id="new" navigate={this.navigateTo} icon="ios-add-circle-outline"/>
          <NavigatorItem id="settings" navigate={this.navigateTo} icon="ios-cog"/>
        </NavigatorBar>
      </View>
    )
  }
}

export default Navigator
