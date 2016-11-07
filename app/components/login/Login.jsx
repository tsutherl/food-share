<<<<<<< Updated upstream
import React from 'react'
=======
import React, { Component } from 'react';
import {browserHistory} from 'react-router'
 
export default class Login extends Component {
>>>>>>> Stashed changes

export default  ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="Login" />
  </form>
)

