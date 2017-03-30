import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import Reducer from '../reducers'

const store = createStore(Reducer, compose(applyMiddleware(thunk, logger), window.devToolsExtension ? window.devToolsExtension() : f => f))

export default store
