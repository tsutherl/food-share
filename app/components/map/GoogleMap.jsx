import React, { Component } from 'react';
import {Link} from 'react-router';
import store from 'APP/app/store'
import {mapStyle} from 'APP/utils/mapstyle.js'

export default class GoogleMap extends Component {
  constructor(props){
    super(props)
    this.initMap = this.initMap.bind(this)
    this.state = {
      user: {
        lat: 40.704581,
        lng: -74.010273
      },
      offerings = []
    }
  }

  componentDidMount(){
    initMap(this.state.user, this.state.offerings)
  }

  render() {
    return (
     <div id="map">
      </div>
    )
  }

  initMap(user, locations){
    //sets user's map to center on their own location
    //this is tentative based on data structure of db
    var center = new google.maps.LatLng(user.location.lat, user.location.lng);

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
      var latLng = new google.maps.LatLng(offering.location.lat, offering.location.lng)
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
