import React, { Component } from 'react';
import { View } from 'react-native';


class Container extends Component {
  render(){
    return(
      <View style={style}>
        {this.props.children}
      </View>
    )
  }
}

var style = {
  flex: 1,
  paddingTop:30,
  //justifyContent: 'center',
  alignItems: 'center',
  padding:10,
  backgroundColor: '#fff',
}

export default Container
