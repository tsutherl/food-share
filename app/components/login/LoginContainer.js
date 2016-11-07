import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {login, whoami, signup} from 'APP/app/reducers/auth'
import store from '../../store'


const mapDispatchToProps= function (dispatch) {
  return {
    login: function (username, password) {
      return dispatch(login(username, password))
    },
    newAuth: function() {
      		return store.getState();
    },
    signup: function (fullname, email, password) {
      return dispatch(signup(fullname, email, password));
    }
  };
};

export default connect (
  ({auth}) => ({auth}),
  mapDispatchToProps
) (Login)



