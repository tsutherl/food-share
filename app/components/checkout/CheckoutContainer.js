import {connect} from 'react-redux'
import Checkout from './Checkout'
import { addOrderAsync} from 'APP/app/reducers/checkout'

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
    }
   
  };
};

export default connect(
    mapStateToProps,
     mapDispatchToProps)
(Checkout)