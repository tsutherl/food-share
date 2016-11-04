'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'


import store from './store'
import HomeContainer from './components/home/HomeContainer'
import StickersContainer from './components/stickers/StickersContainer'
import StickerContainer from './components/stickers/StickerContainer'
import UserContainer from './components/user/UserContainer'
import LoginContainer from './components/login/LoginContainer'
import App from './components/App'
import WhoAmI from './components/WhoAmI'
import CartContainer from './components/cart/CartContainer'
import UserOrdersContainer from './components/user/UserOrdersContainer'

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
              <Route path='cart' component={CartContainer} />
              <Route path='user' component={UserContainer}/>
              <Route path='user/orders' component={UserOrdersContainer}/>
              <Route path='stickers' component={StickersContainer}/>
              <Route path='stickers/:stickerId' component={StickerContainer} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
