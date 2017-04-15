import React, { Component } from 'react';

import Login from './login/login'
import CreateAccount from './createAccount/createAccount'

class LoginManager extends Component {
  constructor(props){
    super(props)
    this.state={displaying:'login'}
  }

  changeToCreateAccount = () => {
    this.setState({displaying:'newAccount'})
  }

  changeToLogin = () => {
    this.setState({displaying:'login'})
  }

  render(){
    if(this.state.displaying === 'login'){
      return <Login newAccount={this.changeToCreateAccount}/>
    } else if (this.state.displaying === 'newAccount') {
      return <CreateAccount backToLogin={this.changeToLogin}/>
    } else {
      return <Text>Error!</Text>
    }
  }
}

export default LoginManager
