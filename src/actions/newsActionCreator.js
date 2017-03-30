import * as ActionTypes from '../actions/constants'

export const loadNewsAction = (data) => {
  return {
    type: ActionTypes.LOAD_NEWS,
    payload: data
  }
}

export const getNewsFilter = (data) => ({
  type: ActionTypes.FILTER_KEYWORD,
  payload: data
})


export const fetchNews = () => {
  return (dispatch) => {
    fetch('https://hn.algolia.com/api/v1/search?query=redux', { method: 'get' })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      dispatch(loadNewsAction(data.hits))
    })
  }
}
