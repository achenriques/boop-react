import React, { Component } from 'react';
import {Text,View, Image } from 'react-native';
import frame1 from '../assets/f1.png'
import frame2 from '../assets/f2.png'
import placeholder from '../assets/eventoPlaceholder.png'
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from './bundle'

class Loading extends Component {
  constructor(props){
    super(props)
    this.state = {flag:0}
    this.frames = [frame1,frame2]
  }

  componentDidMount(){
    this.timerID = setInterval(
      this.renderNextFrame,
      200
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  renderNextFrame = () => {
    this.state.flag++
    this.state.flag %= 2
    this.setState({flag:this.state.flag})
  }

  render(){
    return(
      <Container>
        <Image source={this.frames[this.state.flag]}  style={{width: 240, height: 240}}/>
        <Text>{this.props.status}</Text>
      </Container>
    )
  }
}

export default Loading
