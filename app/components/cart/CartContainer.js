import {connect} from 'react-redux'
import Cart from './Cart'
import { loadItemsAsync, deleteFromCart } from 'APP/app/reducers/cart'

const mapStateToProps = function(state) {
  return {
    user: state.auth,
    items: state.items
  }

}

const mapDispatchToProps= function (dispatch) {
  return {
    onLoadItems: function (userId) {
      dispatch(loadItemsAsync(userId));
    },
    deleteItem: function(orderId, userId) {
      dispatch(deleteFromCart(orderId, userId))
    }
  };
};

export default connect(
    mapStateToProps,
     mapDispatchToProps)
(Cart)
