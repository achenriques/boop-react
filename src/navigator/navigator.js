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
import Discover from '../discover/discover'
import Creator from '../creator/creator'

class Navigator extends Component {
  constructor(props){
    super(props)
    this.state = {navigate:'discover'}
  }

  navigateTo = (id) => {
    this.setState({navigate:id})
  }

  render(){
    var view = <Discover/>
    if(this.state.navigate==='new'){
      view = <Creator/>
    }
    return(
      <View style={{width:'100%',height:'100%'}}>
        {view}
        <Text>{this.state.navigate}</Text>
        <NavigatorBar>
          <NavigatorItem id="discover" isSelected={"discover" == this.state.navigate}
            navigate={this.navigateTo} icon="ios-compass-outline"/>
          <NavigatorItem id="chats" isSelected={"chats" == this.state.navigate}
            navigate={this.navigateTo} icon="ios-chatbubbles-outline"/>
          <NavigatorItem id="new" isSelected={"new" == this.state.navigate}
            navigate={this.navigateTo} icon="ios-add-circle-outline"/>
          <NavigatorItem id="settings" isSelected={"settings" == this.state.navigate}
            navigate={this.navigateTo} icon="ios-cog"/>
        </NavigatorBar>
      </View>
    )
  }
}

export default Navigator
