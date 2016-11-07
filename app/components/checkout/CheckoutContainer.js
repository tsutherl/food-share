import {connect} from 'react-redux'
import Checkout from './Checkout'
import { addOrderAsync, checkoutMessage} from 'APP/app/reducers/checkout'

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
    checkoutMessage: function(message) {
      return dispatch(checkoutMessage(message))
    }
  };
};

export default connect(
    mapStateToProps,
     mapDispatchToProps)
(Checkout)
