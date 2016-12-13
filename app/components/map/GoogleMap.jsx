import React, { Component } from 'react';
import {Link} from 'react-router';
import store from 'APP/app/store'
import {mapStyle} from 'APP/utils/mapstyle.js'
import axios from 'axios';

export default class GoogleMap extends Component {
  constructor(props){
    super(props)
    this.initMap = this.initMap.bind(this)
    this.getLocations = this.getLocations.bind(this)
    //dummy data
    this.state = {
      user: {
        lat: 40.704581,
        lng: -74.010273
      },
      offerings = []
    }
  }

  componentDidMount(){
    this.getLocations()
  }

  render() {
    return (
     <div id="map">
      </div>
    )
  }

  // make this sockety in the future
  getLocations(){
    axios.get('api/offerings')
    .then(response => {
      this.initMap(this.props.user, response)
    })
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
    locations.forEach((location, index) => {
      var latLng = new google.maps.LatLng(offering.location[0], offering.location[1])
      var options = {
        //animation,
        //icon,
        position: latLng,
        map: map,
        label: index+1
      }
      var marker = new google.maps.Marker(options);
    })
  }
}
