import * as ActionTypes from '../actions/constants'

export const newsReducer = (state = {news: [], filteredNews: []}, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_NEWS:
      const newState = Object.assign({}, state, {
        news: action.payload,
        filteredNews: action.payload
      })
      return newState;
    case ActionTypes.FILTER_KEYWORD:
      const filteredNews = state.news.filter((item, index) => {
        let pattern = new RegExp(action.payload, 'gi')
        return pattern.test(item.title)
      })

      return Object.assign({}, state, { filteredNews })

    default:
      return state
  }
}
