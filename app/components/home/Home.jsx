import React, { Component } from 'react';
import {Link} from 'react-router';
import store from 'APP/app/store'
import GoogleMap from '../map/GoogleMap.jsx'

export default class Home extends Component {
  render() {
    // let checkoutMessage;
    // if (this.props.message) {
    //     window.setTimeout(() => {
    //         console.log('STORE', store)
    //         $('#msg').fadeOut('slow')
    //         this.props.setMessageToNull();
    //     },3000);
    //}
    return (
          <div className="home">
              <GoogleMap/>
          </div>
    )
  }
}
