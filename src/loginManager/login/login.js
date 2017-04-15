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

import {Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'

class Login extends Component {
  constructor(props){
    super(props)
    this.state={waiting:false}
  }

  doLogin = () => {
    this.setState({waiting:true})
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
     .catch((error) => {
       this.setState({waiting:false,error:error.message})
    })
  }

  render(){
    return(
      <Container>
        <Header>Log-in</Header>

        <InputDefault placeholder="Email" onChange={(e)=>{this.setState({email:e})}}/>
        <InputDefault placeholder="Password" onChange={(e)=>{this.setState({pass:e})}}/>

        <Text>{this.state.error}</Text>

        <PrimaryButton title="Login" onPress={this.doLogin}/>
        <ActivityIndicator animating={this.state.waiting}/>
        <Space/>


        <Text>No me acuerdo de mi password. Ayuda!</Text>

        <Space/>

        <DefaultButton onPress={this.props.newAccount} title="Crear nueva cuenta"/>
      </Container>
    )
  }
}

export default Login
