import axios from 'axios'


export function cartReducer (state = [], action) {
  switch(action.type) {
    case GET_ORDERS: return action.items;
    default: return state
  }
};


//-------------------------ACTION TYPES-----------------------------//
export const GET_ORDERS = 'GET_ORDERS';


//-------------------------ACTION CREATORS-----------------------------//

const loadItems = function (orders) {
  return {
    type: GET_ORDERS,
    orders
  };
};

//-------------------------ASYNC ACTION CREATORS (THUNK)---------------------------//
export const loadOrdersAsync = function (userId) {
  return function (dispatch) {
    fetch('/api/orders/users/' + userId)
      .then(res => res.json())
      .then(items => {
        dispatch(loadItems(items));
      })
      .catch(err => console.error(err));
  };
};