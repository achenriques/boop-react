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
    this.setState({Boop:this.boops[0],waiting:false})
  }

  dislike = () => {
    this.boops.shift()
    var actualBoop = this.boops[0]
    this.setState({Boop:actualBoop})
  }

  render(){
    if(this.state.waiting){
      return <Loading status="Buscando boops"/>
    } else if (this.state.Boop) {
      return <BoopCard firekey={this.state.Boop} onLike={()=>{alert('like')}} onDislike={this.dislike}/>
    } else {
      return <NoBoops/>
    }
  }
}

export default Discover
