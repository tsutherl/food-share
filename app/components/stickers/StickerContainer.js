import { connect } from 'react-redux';
import { loadStickerAsync } from '../../reducers/stickers';
import Sticker from './Sticker';
import {addToCartAsync} from 'APP/app/reducers/cart';


const mapStateToProps = (state) => ({sticker: state.sticker, user: state.auth})

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadSticker: function () {
      const stickerId = ownProps.params.stickerId;
      dispatch(loadStickerAsync(stickerId));
    },
    addToCart: function(userId, productId) {
      dispatch(addToCartAsync(userId, productId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sticker);

