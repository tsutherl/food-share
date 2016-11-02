import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {login} from 'APP/app/reducers/auth'

export default connect (
  state => ({}),
  dispatch => ({
    login(username, password) {
      return dispatch(login(username, password))
    }
  }),
) (Login)



