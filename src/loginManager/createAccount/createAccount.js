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

import firebase from '../../firebaseConfig';

import {BackButton,Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'

class CreateAccount extends Component {
  constructor(props){
    super(props)
    this.state={waiting:false}
  }

  verifyPass = (pass,value) => {
    this[pass] = value
    if(this.pass1 === this.pass2){
      this.setState({errors:''})
    }else{
      this.setState({errors:"Passwords dont match"})
    }
  }

  doCreate = () => {
    this.setState({waiting:true})
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.pass1)
    .catch((error) => {
      // Handle Errors here.
      this.setState({waiting:false, errors:error.message})
    });
  }

  render(){
    return(
      <Container>
        <BackButton onPress={this.props.backToLogin}/>
        <Header>New account</Header>
        <InputDefault placeholder="Email" onChange={(e) => this.setState({email:e}) }/>
        <InputDefault placeholder="Password" onChange={(e) => this.verifyPass('pass1',e) }/>
        <InputDefault placeholder="Repeat password" onChange={(e) => this.verifyPass('pass2',e) }/>
        <PrimaryButton onPress={this.doCreate} title="Create new account"/>
        <Text>{this.state.errors}</Text>
        <ActivityIndicator animating={this.state.waiting}/>
        <Space/>
        <Text>Make boop grate again</Text>
      </Container>
    )
  }
}

export default CreateAccount
