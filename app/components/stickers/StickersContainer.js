import { connect } from 'react-redux';
import { loadStickersAsync } from '../../reducers/stickers';
import Stickers from './Stickers';
import {addToCartAsync} from 'APP/app/reducers/cart';

const mapStateToProps = (state) => ({stickers: state.stickers, user: state.auth})

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadStickers: function () {
      dispatch(loadStickersAsync());
    },
    addToCart: function(userId, productId) {
      console.log("in addToCart")
      dispatch(addToCartAsync(userId, productId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stickers);

