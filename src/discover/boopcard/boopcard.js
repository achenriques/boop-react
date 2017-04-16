import React, { Component } from 'react';
import {View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'

class BoopCard extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <Header>a {this.props.data.distance}km de ti</Header>
        <Header>{this.props.data.nombre}</Header>
        <Space/>
        <PrimaryButton onPress={this.props.onLike} title="like"/>
        <DefaultButton onPress={this.props.onDislike} title="dislike"/>
      </Container>
    )
  }
}

export default BoopCard
