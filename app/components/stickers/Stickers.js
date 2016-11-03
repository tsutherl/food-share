import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Stickers extends Component {

  componentDidMount () {
    this.props.onLoadStickers();

  }

  render () {
    return (
      <div className="flex-container">
        {
          this.props.stickers.map(sticker => {
            return (
              <div className="sticker-div" key={sticker.id}>
                  <Link to={"/stickers/" + sticker.id}> <img src = {sticker.picture}/> <h5>{ sticker.name }</h5></Link>
                  <button onClick={()=> this.props.addToCart(this.props.user.id, sticker.id)} className="btn btn-info">add to cart</button>

              </div>
            )
          })
        }
      </div>
    );
  }
}
