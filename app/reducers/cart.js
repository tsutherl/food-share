export function cartReducer (state = [], action) {
  switch(action.type) {
    case GET_CART_ITEMS: return action.items

    default: return state
  }
};


//-------------------------ACTION TYPES-----------------------------//
export const GET_CART_ITEMS = 'GET_CART_ITEMS';


//-------------------------ACTION CREATORS-----------------------------//

const loadItems = function (items) {
  return {
    type: GET_CART_ITEMS,
    items
  };
};

//-------------------------ASYNC ACTION CREATORS (THUNK)---------------------------//
export const loadItemsAsync = function (userId) {
  return function (dispatch) {
    fetch('/api/orders/users/' + userId)
      .then(res => res.json())
      .then(items => {
        dispatch(loadItems(items));
      })
      .catch(err => console.error(err));
  };
};


