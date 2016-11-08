import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sticker extends Component {

  componentDidMount () {
    this.props.onLoadSticker();

  }

  render () {
    return (
      <div className='center_div container text-center'> 
        <div>
          <img src = {this.props.sticker.picture} />
          <div>{this.props.sticker.wish}</div>
        </div>  
        <div>
          <h2> {this.props.sticker.name} </h2>
          <button onClick={()=> this.props.addToCart(this.props.user.id, this.props.sticker.id)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">add to cart</button>

        </div>
      </div>
    );
  }
}
