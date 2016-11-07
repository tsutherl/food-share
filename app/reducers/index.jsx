import { combineReducers } from 'redux'
import {stickersReducer, stickerReducer} from './stickers'
import { cartReducer } from './cart'
import {checkoutReducer} from './checkout'


const rootReducer = combineReducers({
	stickers: stickersReducer,
  sticker: stickerReducer,
	auth: require('./auth').default,
  items: cartReducer
  // orders: checkoutReducer
})

export default rootReducer
