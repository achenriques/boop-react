import React, { Component } from 'react';
import Runner from '../core/firebaseRunner';

import Loading from '../components/loading'
import BoopCard from './boopcard/boopcard'
import NoBoops from './noboops/noboops'


class Discover extends Component {
  constructor(props){
    super(props)
    this.state = {waiting:true}
    this.boops = []
  }

  componentDidMount(){
    Runner.getListOfBoopsAround(10).then(this.onReady)
  }

  onReady = (list) => {
    this.boops = list
    this.nextKey()
  }

  dislike = () => {
    Runner.dislike(this.state.Boop)
    this.nextKey()
  }

  like = () => {
    Runner.likeBoop(this.state.Boop)
    this.nextKey()
  }

  nextKey = () => {
    var key = this.boops[0]
    this.boops.shift()
    if(key){
      this.setState({waiting:true})
      Runner.isViewed(key).then( (viewed) => {
        if(!viewed){
          this.setState({waiting:false,Boop:key})
        }else{
          this.nextKey()
        }
      })
    }else{
      this.setState({waiting:false,Boop:false})
    }
  }

  render(){
    if(this.state.waiting){
      return <Loading status="Buscando boops"/>
    } else if (this.state.Boop) {
      return <BoopCard firekey={this.state.Boop} onNext={this.nextKey} onLike={this.like} onDislike={this.dislike}/>
    } else {
      return <NoBoops/>
    }
  }
}

export default Discover
