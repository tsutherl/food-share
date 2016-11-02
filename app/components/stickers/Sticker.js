import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sticker extends Component {

  componentDidMount () {
    this.props.onLoadSticker();

  }

  render () {
    return (
      <div>
        <img src = {this.props.sticker.picture} />
        <h2> {this.props.sticker.name} </h2>

      </div>
    );
  }
}
