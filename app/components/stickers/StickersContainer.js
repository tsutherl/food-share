import { connect } from 'react-redux';
import { loadStickersAsync } from '../../reducers/stickers';
import Stickers from './Stickers';

const mapStateToProps = ({stickers}) => ({stickers})

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadStickers: function () {
      dispatch(loadStickersAsync());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stickers);

