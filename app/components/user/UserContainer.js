import React from 'react';
import {connect} from 'react-redux';
import User from './User';


const mapStateToProps = function (state) {
	console.log('state', state);
	console.log('logging mapStateToProps', state.auth);
	return {
		auth: state.auth
	}
}


export default connect(
	mapStateToProps,
	null
	)(User)
