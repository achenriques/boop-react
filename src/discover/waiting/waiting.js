import React, { Component } from 'react';

import {
  ActivityIndicator,
} from 'react-native';

import {Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'

class BoopsAreWaiting extends Component {
  render(){
    return(
      <Container>
        <Header>Loading...</Header>
        <ActivityIndicator animating={true}/>
      </Container>
    )
  }
}

export default BoopsAreWaiting
