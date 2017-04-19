import React, { Component } from 'react';
import firebase from '../firebaseConfig';
import GeoFire from 'geofire';

import Loading from '../components/loading'
import BoopCard from './boopcard/boopcard'
import NoBoops from './noboops/noboops'

class Discover extends Component {
  constructor(props){
    super(props)
    this.state = {boops:[], waiting:true}
  }

  componentDidMount(){
    // cargar la posicion del usuario y setup de firebase A LA VEZ
    // oh, la asincronia
    this.geoFire = new GeoFire(firebase.database().ref('locations'))
    navigator.geolocation.getCurrentPosition(this.onSuccessLocation, this.onErrorLocation, {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000} )
  }

  componentWillUnmount(){
    if(this.geoQuery){
      this.geoQuery.cancel()
    }
    // se usa esta flag para cancelar el cargado de eventos asap
    this.canceled = true
  }

  onSuccessLocation = (position) => {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    // al conseguir la posicion bien del usuario pedimos boops cercanos a el
    if(this.canceled){return}
    this.geoQuery = this.geoFire.query({
      center: [latitude, longitude],
      radius: 10
    });
    // una vez hecha la query empezamos a recibir eventos 8 horas
    this.geoQuery.on("key_entered", this.boopAdded)
    this.geoQuery.on("ready",() => {this.setState({waiting:false})})
  }

  boopAdded = (key, location, distance) => {
    if(this.canceled){return}
    this.state.boops.push(key)
    this.setState({boops:this.state.boops})
  }

  dislike = () => {
    this.state.boops.shift()
    this.setState({boops:this.state.boops})
  }

  render(){
    if(this.state.waiting){
      return <Loading status="Buscando boops"/>
    } else if (this.state.boops.length>0) {
      return <BoopCard firekey={this.state.boops[0]} onLike={()=>{alert('like')}} onDislike={this.dislike}/>
    } else {
      return <NoBoops/>
    }
  }
}

export default Discover
