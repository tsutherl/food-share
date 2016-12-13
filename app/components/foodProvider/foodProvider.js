'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux'
import store from 'APP/app/store'

import { postNewProviderAction } from 'APP/app/reducers/foodProvider'

//export default ({ products }) => (
class foodProvider extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.codeAddress = this.codeAddress.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    const newProvider = {
      name: event.target.name.value,
      type: event.target.type.value,
      address: event.target.address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      phone: event.target.phone.value,
    }
    var geoAddress = `${newProvider.address } ${newProvider.city} ${newProvider.state}`
    console.log('new geoAddress', geoAddress)
    newProvider.location = this.codeAddress(geoAddress)
    this.props.postNewProviderAction(newPovider)
  }

  render() {
    //console.log("THE STORE STATE ", store.getState  )  //array
    return (
      <div>
        <h4>Submit an Offer</h4>
         <div>
          <form >
            <p><input type="text" placeholder="Food Provider Name" name="name" /></p>
            <p><input placeholder="Type" name="type" /></p>
            <p><input placeholder="Address" name="address" /></p>
            <p><input placeholder="City" name="city" /></p>
            <p><input placeholder="State" name="state" /></p>
            <p><input placeholder="Phone" name="phone" /></p>
            <button className= 'btn btn-default' onSubmit={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }

  codeAddress(address) {
    var latLng;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( {'address': address}, function(results, status) {
      //if successful query, sets map center to results
      //for form input can just add user to db w/ location data
      if (status == 'OK') {
        latLng = results[0].geometry.location;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
    //assumes this is an object { lat: FLOAT, lng: FLOAT}
    return latLng;
  }
}

// const MapState = {}
const MapDispatch = { postNewProviderAction }

export default connect(null, MapDispatch)(foodProvider) //container equivalent
