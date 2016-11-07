import {connect} from 'react-redux'
import Checkout from './Checkout'
import { addOrderAsync, sendEmail} from 'APP/app/reducers/checkout'

const mapStateToProps = function(state) {
  return {
    auth: state.auth,
    items: state.items
  };

};

const mapDispatchToProps= function (dispatch) {
  return {
    placeOrder: function(order, masterId, userId) {
      return dispatch(addOrderAsync(order, masterId, userId));
    },
    sendEmail: function(email){
      return dispatch(sendEmail(email));
    }
   
  };
};

export default connect(
    mapStateToProps,
     mapDispatchToProps)
(Checkout)