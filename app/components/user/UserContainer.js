import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import { updateUserAsync } from '../../reducers/auth';


const mapStateToProps = function (state) {
	console.log('state', state);
	console.log('logging mapStateToProps', state.auth);
	return {
		auth: state.auth
	}
}

const mapDispatchToProps= function(dispatch){
	return {
    submitInfo: function (newInfo,currentUser) {
      console.log("I am gonna dispatch the info you gave me!!!!!!", newInfo)
      dispatch(updateUserAsync(newInfo,currentUser));
    }
  };
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(User)
