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

Runner.dislikeBoop = function(boop_id){
 /* Ponemos esa referencia a 0 porque nos importa si existe esa ruta
  * (si la id de ese boop esta en dislikes) y no su valor.
  * Como firebase no permite nulls pues un 0
  */
  var user = firebase.auth().currentUser.uid
  firebase.database().ref('Viewed').child(user).child(boop_id).set('disliked')
}

Runner.isViewed = function(boop_id){
  return new Promise(function(resolve, reject) {
    var user = firebase.auth().currentUser.uid
    firebase.database().ref('Viewed').child(user).child(boop_id).once('value').then((info)=>{
      resolve(info.val() !== null)
    })
  });
}

Runner.likeBoop = function(boop_id){
  var user = firebase.auth().currentUser.uid
  firebase.database().ref('Viewed').child(user).child(boop_id).set('liked')
}

Runner.getLikedBoopKeys = function() {
  return new Promise(function(resolve, reject) {

    var user = firebase.auth().currentUser.uid
    var likedKeys = []

    firebase.database().ref('Viewed').child(user).once('value').then((info)=>{
      var viewed = info.val()

      Object.keys(viewed).forEach( (key)=>{
        if(viewed[key] === 'liked'){
          likedKeys.push(key)
        }
      })

      resolve(likedKeys)
    })
  });
}



export default Runner
