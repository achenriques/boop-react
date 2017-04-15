import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './style.js'

class Splashing extends Component {
  render(){
    return(
      <View style={styles.splashing}>
        <Image
          style={{width: 450, height: 450}}
          source={{uri: 'http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif.pagespeed.ce.DETazxsDgB.gif'}}
        />
      </View>
    )
  }
}

export default Splashing
