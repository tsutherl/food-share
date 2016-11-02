import React, { Component } from 'react';

export default class Cart extends Component {

  componentDidMount() {
    const user = this.props.auth;
    this.props.onLoadItems(user.id);
  }

  render () {
    return (
      <div>
        <h2>{this.props.auth.name}'s Cart</h2>
      </div>
    );
  }
}
