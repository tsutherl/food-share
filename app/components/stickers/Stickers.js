import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Stickers extends Component {

  componentDidMount () {
    this.props.onLoadStickers();

  }

  render () {
    return (
    <div>
      <h3 className="title">Click on a Swish to see wish details!</h3>
      <div className="flex-container">
        {
          this.props.stickers.map(sticker => {
            return (
              <div className="sticker-div" key={sticker.id}>
                  <div className= "sticker-image">
                    <Link to={"/stickers/" + sticker.id}>
                      <img src = {sticker.picture}/>
                    </Link>
                  </div>
                  <div className="sticker-details">
                    <Link to={"/stickers/" + sticker.id}><h5>{ sticker.name }</h5></Link>
                    <button onClick={()=> this.props.addToCart(this.props.user.id, sticker.id)} className="btn btn-info">add to cart</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
    );
  }
}
