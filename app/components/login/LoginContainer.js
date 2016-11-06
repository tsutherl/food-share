import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {login, whoami} from 'APP/app/reducers/auth'
import store from '../../store'


const mapDispatchToProps= function (dispatch) {
  return {
    login: function (username, password) {
      return dispatch(login(username, password))
    },
    newAuth: function() {
      		return store.getState();
    }
  };
};

export default connect (
  ({auth}) => ({auth}),
  mapDispatchToProps
) (Login)



