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
        location: [40.704581, -74.010273]
      },
      offerings : []
    }
  }

  componentDidMount(){
    this.getLocations()
  }

  render() {
    console.log('rendering map component')
    return (
     <div id="map">
      </div>
    )
  }

  // make this sockety in the future
  getLocations(){
    // axios.get('api/offerings')
    // .then(response => {
      console.log('getting locations')
      this.initMap(this.state.user, this.state.offerings)
    // })
  }
  initMap(user, offerings){
    //sets user's map to center on their own location
    //this is tentative based on data structure of db
    console.log('initializing map')
    var center = new google.maps.LatLng(user.location[0], user.location[1]);

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
    offerings.forEach((offering, index) => {
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
