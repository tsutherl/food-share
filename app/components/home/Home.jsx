import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
  render() {
    return (
     <div className="home-cover"> 
      <a name="about"></a>
        <div className="intro-header">
            
            <div className="container">

                <div className="row text-center vertical-center">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1 className='center-block'>Make A Swish</h1>
                            <h3>And Watch It Come True</h3>
                            <hr className="intro-divider"/>
                            <ul className="list-inline intro-social-buttons">
                                <li>
                                    <Link to="/stickers" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">View Swishes</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    )
  }
}


