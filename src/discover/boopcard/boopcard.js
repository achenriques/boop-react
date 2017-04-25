import React, { Component } from 'react';
import {ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {NextButton,DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'
import placeholder from '../../assets/eventoPlaceholder.png'
import Loading from '../../components/loading'
import SlidingImageContainer from '../../components/slidingImageContainer'
import Runner from '../../core/firebaseRunner'
import EstimatedTime from './eta'

class BoopCard extends Component {
  constructor(props){
    super(props)
    this.state = {waiting:true,firekey:this.props.firekey}
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
    this.setState({waiting:true,firekey:key})
    Runner.getBoop(key).then((b)=>{
      this.setState({b:b.val(),waiting:false})
    })
  }

  render(){
    if(this.state.waiting){
      return <Loading status="Cargando evento"/>
    }
    return(
      <View style={{width:'100%',flex:1}}>
        <SlidingImageContainer src={this.state.firekey}>
          <Text style={{color:'#000',fontSize:30,padding:30,paddingBottom:4,fontWeight:'800'}}>{this.state.b.title}</Text>
          <Text style={{color:'#000',fontSize:25,paddingLeft:30,fontWeight:'400'}}>{this.state.b.description}</Text>
          <Space/>
          <Text style={{color:'#000',fontSize:25,paddingLeft:30,fontWeight:'400'}}>in {this.state.b.place}</Text>
          <EstimatedTime date={this.state.b.date}/>
          <View style={{height:150}}/>
        </SlidingImageContainer>
        <View style={likeButtons}>
          <DislikeButton onPress={this.props.onDislike}/>
          <NextButton onPress={this.props.onNext}/>
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
