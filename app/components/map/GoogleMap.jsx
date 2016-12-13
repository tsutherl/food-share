import React, { Component } from 'react';
import {Link} from 'react-router';
import store from 'APP/app/store'
import {mapStyle} from './mapstyle.js'

export default class GoogleMap extends Component {
  constructor(props){
    super(props)
    this.initMap = this.initMap.bind(this)
  }

  componentDidMount(){
    initMap(this.props.current, this.props.locations)
  }

  render() {
    return (
     <div id="map">
      </div>
    )
  }

  initMap(current, locations){

    //sets user's map to center on their own location
    var center = {lat: current.lat, lng: current.lng}

    //creates map based on center, zoom, styles
    var map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 9,
      styles: mapStyle,
      scrollwheel: false
    });

    // initial marker on home location
    var marker = new google.maps.Marker({
         position: center,
         map: map
       });

    // create markers based on location array
    locations.forEach(location => {
      var latLng = new google.maps.LatLng(location.lat, location.lng)
      var options = {
        //animation,
        //icon,
        position: latLng;
        map: map
      }
      var marker = new google.maps.Marker(options);
    })
  }
}
