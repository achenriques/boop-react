/* Main component for Boop. should handle splash screen, and redirect to login
or main screen */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from './src/firebaseConfig';
import Splashing from './src/splashing/splashing'
import LoginManager from './src/loginManager/loginManager'
import Navigator from './src/navigator/navigator'

class Boop extends Component {
  constructor(props){
    super(props)
    this.state = {splashing:true}
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged( (user) => {
      this.setState({splashing:false, user:user})
    })
  }

  render() {
    if(this.state.splashing){
      return <Splashing/>
    } else if (this.state.user) {
      return <Navigator/>
    } else {
      return <LoginManager/>
    }
  }
}

export default Boop
AppRegistry.registerComponent('Boop', () => Boop);
