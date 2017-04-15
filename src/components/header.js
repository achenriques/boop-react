import React, { Component } from 'react';
import { Text } from 'react-native';


class Header extends Component {
  render(){
    return(
      <Text style={{fontSize:30,color:"#000"}}>{this.props.children}</Text>
    )
  }
}

export default Header
