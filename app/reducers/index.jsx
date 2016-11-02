import { combineReducers } from 'redux'
import stickerReducer from './stickers'

const rootReducer = combineReducers({

  	auth: require('./auth').default,  
	stickers: stickerReducer

})

export default rootReducer
