import React, { Component } from 'react';

export default class Cart extends Component {

  componentDidMount() {
    const user = this.props.user;
    let ready = (user && this.props.items);
    ready && this.props.onLoadItems(user.id);
    

  }

  render () {
    return (
      <div id="cart-container">
        <div className="main-content">
          <h2 className="full-line">{this.props.user && this.props.user.name}'s Cart</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="cart-table-hdg"></th>
                <th className="cart-table-hdg">swish</th>
                <th className="cart-table-hdg">price</th>
                <th className="cart-table-hdg">qty</th>
                <th className="cart-table-hdg">total price</th> 
              </tr>
            </thead>
            <tbody>

          {this.props.items &&
            this.props.items.map((item, idx) => (
            <tr className="cart-list" key={idx}>
              <td>
                <img src={item.product.picture} className="cart-pic" /> 
              </td>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick = {() => this.props.deleteItem(item.id, item.user_id)}
                  className= "btn-cart-remove">
                  <img src ="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_12-512.png" />
                </button>
              </td> 
            </tr>
            ))
          }
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}
