import { combineReducers } from 'redux'
import stickerReducer from './stickers'

const rootReducer = combineReducers({
	stickers: stickerReducer
})

export default rootReducer
