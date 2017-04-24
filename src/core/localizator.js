/* Esta funcion intenta conseguir la posicion del usuario.
 * Primero intenta encontrarla usando GPS. Si lo consigue devuelve
 * Esa posicion y la guarda en firebase.
 * Si no es posible usar el GPS (mala senal o ubicacion deshabilitada)
 * prueba a buscar en firebase. Si no esta en firebase se retorna un error.*/

import firebase from '../firebaseConfig'

var LatLng = function(latitude,longitude){
  this.latitude = latitude
  this.longitude = longitude
  return this
}

var localization_cache = null

var localizate = function(user_id){
  return new Promise((resolve, reject) => {

    if(localization_cache){
      resolve(localization_cache)
    }else{
      navigator.geolocation.getCurrentPosition(onSuccessLocation, onErrorLocation,{enableHighAccuracy: false, timeout: 90000, maximumAge: 30000})
    }

    function onSuccessLocation(position) {
     // tenemos la direccion GPS
     var pos = new LatLng(position.coords.latitude,position.coords.longitude)
     localization_cache = pos
     firebase.database().ref('userLocations/'+user_id).set(pos)
     resolve(pos)
    }

    function onErrorLocation(){
     // no la tenemos
      firebase.database().ref('userLocations/'+user_id).once('value').then((snapshot) => {
        var value = snapshot.val()
        if(value !== null){
          resolve(value)
        } else {
          reject('could not find position data in firebase database')
        }
      })
    }

   });
 }

export default localizate
