import { connect } from 'react-redux';
import { loadStickerAsync } from '../../reducers/stickers';
import Sticker from './Sticker';
import {addToCartAsync} from 'APP/app/reducers/cart';


const mapStateToProps = ({sticker}) => ({sticker})

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadSticker: function () {
      const stickerId = ownProps.params.stickerId;
      dispatch(loadStickerAsync(stickerId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sticker);

