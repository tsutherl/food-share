import React from 'react'

export default = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="Login" />
  </form>
)

