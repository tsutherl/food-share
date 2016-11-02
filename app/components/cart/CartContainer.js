import {connect} from 'react-redux'
import Cart from './Cart'

const mapStateToProps (state) => ({
  user: state.auth,
  items: state.items
})

const mapDispatchToProps= function (dispatch) {
  return {
    onLoadItems: function (userId) {
      dispatch(loadItemsAsync(userId));
    }
  };
};

export default connect(
    mapStateToProps,
     mapDispatchToProps)
(Cart)
