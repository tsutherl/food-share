import {connect} from 'react-redux'
import GoogleMap from './GoogleMap'

const mapStateToProps = function(state) {
  return {
    current: state.current,
    locations: state.locations
  };
};

const mapDispatchToProps= function (dispatch) {
  return null
  };
};

export default connect(
      mapStateToProps,
      mapDispatchToProps)
(GoogleMap)
