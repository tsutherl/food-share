'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {loadItemsAsync} from './reducers/cart'
import {whoami} from './reducers/auth'

import store from './store'
import HomeContainer from './components/home/HomeContainer'
import UserContainer from './components/user/UserContainer'

import LoginContainer from './components/login/LoginContainer'
import App from './components/App'
import WhoAmI from './components/WhoAmI'
import UserOrdersContainer from './components/user/UserOrdersContainer'

import OfferingContainer from './components/offering/OfferingContainer'




    //onEnter function (nextState, replace, callback)  react router onENter

// EXAMPLE CODE ONLY
const Main = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user }) =>
    <div>
      {user ? <WhoAmI/> : <Login/>}
      <Root />
    </div>
)



render (
  <Provider store={store}>
    <Router history={browserHistory}>

        <Route path='/' component={App}>
            <IndexRedirect to='home'/>
              <Route path='home' component={HomeContainer} />
              <Route path='login' component={LoginContainer}/>
              <Route path='offerings' component={OfferingContainer}/>

              <Route path='user' component={UserContainer}/>
              <Route path='user/orders' component={UserOrdersContainer}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
