import { combineReducers } from 'redux'
import {stickersReducer, stickerReducer} from './stickers'
import { cartReducer } from './cart'
import {checkoutReducer} from './checkout'

import offeringsReducer from './offering'


const rootReducer = combineReducers({
	offerings: offeringsReducer,
	
	stickers: stickersReducer,
  	sticker: stickerReducer,
	auth: require('./auth').default,
  	items: cartReducer,
  	message: checkoutReducer
})

export default rootReducer
