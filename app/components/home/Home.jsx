import React, { Component } from 'react';
import {Link} from 'react-router';
import store from 'APP/app/store'
import GoogleMap from '../map/GoogleMap.jsx'
import { About } from 'APP/app/components/about/About'
import { Col , Image, Accordion, Panel} from 'react-bootstrap';

export default class Home extends Component {
  render() {

    return (
          <div className="home">
              {this.props.showAbout? <About providers={this.props.foodProviders}/> : null}
              <GoogleMap/>
          </div>
    )
  }
}
