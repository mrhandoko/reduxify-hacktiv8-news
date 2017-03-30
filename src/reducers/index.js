import { combineReducers } from 'redux'

import {newsReducer} from './newsReducer'
import {peopleReducer} from './peopleReducer'

export default combineReducers({
  news: newsReducer,
  people: peopleReducer
})
