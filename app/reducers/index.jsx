import { combineReducers } from 'redux'
import {stickersReducer, stickerReducer} from './stickers'
import { cartReducer } from './cart'


const rootReducer = combineReducers({
	stickers: stickersReducer,
  sticker: stickerReducer,
	auth: require('./auth').default,
  items: cartReducer
})

export default rootReducer
