import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Stickers extends Component {

  componentDidMount () {
    this.props.onLoadStickers();

  }

  render () {
    console.log("PROPPPPPSSSSSSSS", this.props)
    return (
      <div>
        {
          this.props.stickers.map(sticker => {
            return (
              <ul key={sticker.id} className="list-unstyled">
                <li className="col-sm-4">
                  <Link to={"/stickers/" + sticker.id}> <img src = {sticker.picture}/> { sticker.name }</Link>
                </li>
              </ul>
            )
          })
        }
      </div>
    );
  }
}
