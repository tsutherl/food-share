import { combineReducers } from 'redux'
import {stickersReducer, stickerReducer} from './stickers'
import {aboutReducer} from './about'

import offeringsReducer from './offering'

import providersReducer from './foodProvider'


const rootReducer = combineReducers({
	offerings: offeringsReducer,
	foodProviders: providersReducer,
	auth: require('./auth').default,
    showAbout: aboutReducer
})

export default rootReducer
