import React, { Component } from 'react';
import {ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'
import placeholder from '../../assets/eventoPlaceholder.png'
import Loading from '../../components/loading'
import SlidingImageContainer from '../../components/slidingImageContainer'
import firebase from '../../firebaseConfig';

class BoopCard extends Component {
  constructor(props){
    super(props)
    this.state = {waiting:true}
  }

  componentDidMount(){
    this.getBoopCard(this.props.firekey)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.firekey !== nextProps.firekey){
      this.getBoopCard(nextProps.firekey)
    }
  }

  getBoopCard = (key) => {
    this.setState({waiting:true})
    firebase.database().ref('BoopInfo/'+key).once('value').then((snapshot) => {
      var b = snapshot.val()
      this.setState({b:b,waiting:false})
    })
  }

  render(){
    if(this.state.waiting){
      // aqui hay que poner una pantalla de carga de boop
      return <Loading status="Cargando evento"/>
    }
    return(
      <View style={{width:'100%',flex:1}}>
        <SlidingImageContainer image={placeholder}>
          <Text style={{color:'#000',fontSize:30,padding:30,paddingBottom:4,fontWeight:'800'}}>{this.state.b.title}</Text>
          <Text style={{color:'#000',fontSize:25,paddingLeft:30,fontWeight:'400'}}>{this.state.b.description}</Text>
          <Space/>
          <Text style={{color:'#000',fontSize:25,paddingLeft:30,fontWeight:'400'}}>in {this.state.b.place}</Text>
          <Text style={{textAlign:'center',color:'#ff0000',fontSize:26,paddingLeft:30,fontWeight:'200'}}>dentro de 3 dias</Text>
          <View style={{height:150}}/>
        </SlidingImageContainer>
        <View style={likeButtons}>
          <DislikeButton onPress={this.props.onDislike}/>
          <LikeButton onPress={this.props.onLike}/>
        </View>
      </View>
    )
  }
}

var likeButtons = {
  position:'absolute',
  bottom:75,
  flexDirection:'row',
  justifyContent:'space-around',
  width: "100%",
}

export default BoopCard
