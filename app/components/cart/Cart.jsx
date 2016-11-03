import React, { Component } from 'react';

export default class Cart extends Component {

  componentDidMount() {
    const user = this.props.user;
    console.log("THE PROPS ON CART", this.props)
    this.props.onLoadItems(user.id);

  }

  render () {
    return (
      <div id="cart-container">
        <div className="main-content">
          <h2 className="full-line">{this.props.user && this.props.user.name}'s Cart</h2>

          {this.props.items &&
            this.props.items.map((item, idx) => (
            <li className="cart-list" key={idx}><img src={item.product.picture} className="cart-pic" /> {item.product.name}<button onClick = {() => this.props.deleteItem(item.id, item.user_id)}className= "btn-cart-remove"><img src ="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_12-512.png" /></button> </li>
            ))
          }

        </div>
      </div>
    );
  }
}
