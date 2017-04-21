import React, { Component } from 'react';
import {ScrollView,View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {DislikeButton,LikeButton, Header,Container,Space,InputDefault,PrimaryButton,DefaultButton} from '../../components/bundle'

class EstimatedTime extends Component {
  constructor(props){
    super(props)
    this.state = {time:this.timeDifference(new Date(),this.props.date)}
  }

  timeDifference(d, dd) {
    var hour = 60 * 60 * 1000,
        day = hour * 24,
        week = day * 7,
        month = day * 30,
        ms = Math.abs(d - dd),

    months = parseInt(ms / month, 10);
    ms -= months * month;
    var weeks = parseInt(ms / week, 10);
    ms -= weeks * week;
    var days = parseInt(ms / day, 10);
    ms -= days * day;
    var hours = parseInt(ms / hour, 10);
    ms -= hours * hour;

    return ({
      m:months,
      w:weeks,
      d:days,
      h:hours,
    });
  };

  render(){
    if(this.state.time.m !== 0){
      return(
      <Text style={{fontSize:25,paddingLeft:30,fontWeight:'400',color:'#0000ff'}}>
        {this.state.time.m} months remaining
      </Text>
    )
    }

    if(this.state.time.w !== 0){
      return(
      <Text style={{fontSize:25,paddingLeft:30,fontWeight:'400',color:'#00ff00'}}>
        {this.state.time.w} weeks remaining
      </Text>
      )
    }

    if(this.state.time.d !== 0){
      return(
      <Text style={{fontSize:25,paddingLeft:30,fontWeight:'400',color:'#ff0000'}}>
        {this.state.time.d} days remaining
      </Text>
      )
    }

    if(this.state.time.h !== 0){
      return(
      <Text style={{fontSize:25,paddingLeft:30,fontWeight:'400',color:'#ff0000'}}>
        !{this.state.time.h} hours remaining!
      </Text>
      )
    }
  }
}

export default EstimatedTime
