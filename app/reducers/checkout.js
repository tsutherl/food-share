import axios from 'axios'


//maybe we don't need have an action that adds an order because we can just get all the orders when we need them? 

// export function checkoutReducer (state = [], action) {
//   switch(action.type) {
//     case ADD_ORDER_CLEAR_CART: 
//       state.items = [];
//       return state.orders.concat([action.order]);
//     default: return state;
//   }
// }


//-------------------------ACTION TYPES-----------------------------//
// export const ADD_ORDER_CLEAR_CART = 'ADD_ORDER_CLEAR_CART';

//-------------------------ACTION CREATORS-----------------------------//

// const addOrder = function (order) {
//   return {
//     type: ADD_ORDER_CLEAR_CART,
//     order
//   };
// };

//-------------------------ASYNC ACTION CREATORS (THUNK)---------------------------//
export const sendEmail= function (email){
  axios.post('/api/orders/sendmail',{email:email})
  .then(()=>{});
}
//parallel ajaxs request ok?
export const addOrderAsync = function (order, masterId, userId) {
  console.log('DA STUFF',order, masterId, userId)
  return function(dispatch) {
    axios.put(`/api/orders/users/${userId}`)
    .then(()  => {});

    axios.put(`/api/orders/orderMaster/${masterId}`, order)
    .then( () => {
      // dispatch(addOrder(updatedOrder))
    })
    .catch(err => console.error(err))
  }
}



