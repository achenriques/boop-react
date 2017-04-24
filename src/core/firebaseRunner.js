import firebase from '../firebaseConfig'
import localizate from './localizator'
import GeoFire from 'geofire'

var Runner = {}

Runner.getListOfBoopsAround = function(kilometers){
  return new Promise(function(resolve, reject) {
    keysToReturn = []

    geoFire = new GeoFire(firebase.database().ref('locations'))
    var user = firebase.auth().currentUser.uid

    localizate(user).then((position)=>{
      var latitude = position.latitude
      var longitude = position.longitude

      geoQuery = geoFire.query({
        center: [latitude, longitude],
        radius: kilometers
      });

      // una vez hecha la query empezamos a recibir eventos 8 horas
      geoQuery.on("key_entered", addKey)
      geoQuery.on("ready", returnKeys)
    })

    function addKey(key) {
      keysToReturn.push(key)
    }

    function returnKeys() {
      geoQuery.cancel()
      resolve(keysToReturn)
    }
  })
}

Runner.getBoop = function(key){
  return firebase.database().ref('BoopInfo/'+key).once('value')
}

export default Runner
