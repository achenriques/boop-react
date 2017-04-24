import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './style.js'
import logo from '../assets/f1.png'

class Splashing extends Component {
  render(){
    return(
      <View style={styles.splashing}>
        <Image
          style={{width: 215, height: 215}}
          source={logo}
        />
      </View>
    )
  }
}

export default Splashing
