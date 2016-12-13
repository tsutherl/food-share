import {connect} from 'react-redux'
import Home from './Home'
// import {showAbout} from 'APP/app/reducers/about'

const mapStateToProps = ({showAbout, foodProviders}) => ({
    showAbout,
    foodProviders
  });



const mapDispatchToProps= function (dispatch) {
  return {
    setMessageToNull: function() {
      return dispatch(messageNull());
    }
  };
};

export default connect(
      mapStateToProps,
     mapDispatchToProps)
(Home)
