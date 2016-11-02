import { combineReducers } from 'redux'
import {stickersReducer, stickerReducer} from './stickers'


const rootReducer = combineReducers({
	stickers: stickersReducer,
  	sticker: stickerReducer
	auth: require('./auth').default,  
})

export default rootReducer
