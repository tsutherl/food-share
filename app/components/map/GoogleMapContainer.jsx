import {connect} from 'react-redux'
import GoogleMap from './GoogleMap'

const mapStateToProps = function(state) {
  return {
    user: state.user,
  };
};

const mapDispatchToProps= function (dispatch) {
  return null
}

export default connect(
      mapStateToProps,
      mapDispatchToProps)
(GoogleMap)
