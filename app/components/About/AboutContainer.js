import {connect} from 'react-redux'
import About from './About'

const mapStateToProps = function(state) {
  return {
    foodProviders: state.foodProviders,
  };
};


export default connect(mapStateToProps)(About)
