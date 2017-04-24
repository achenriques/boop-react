import React, { Component } from 'react';
import { Image } from 'react-native';
import firebase from '../firebaseConfig';

class ImageFromStorage extends Component {
  constructor(props){
    super(props)
    this.state = {waiting:true}
  }

  componentDidMount(){
    this.loadImage(this.props.src)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.src !== nextProps.src){
      this.loadImage(nextProps.src)
    }
  }

  loadImage = (src) => {
    this.setState({waiting:true})
    if(src){
      firebase.storage().ref('images/'+src).getDownloadURL().then((url)=>{
        this.setState({src:url, waiting:false})
      })
    }
  }

  render(){
    if(this.state.waiting){
      return <Image source={this.props.loading} style={this.props.style}/>
    }else{
      return <Image source={{uri:this.state.src}} style={this.props.style}/>
    }
  }
}

export default ImageFromStorage
