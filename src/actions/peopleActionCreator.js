import * as ActionTypes from './constants'

export const loadPeopleAction = (data) => ({
  type: ActionTypes.LOAD_PEOPLE,
  payload: data
})

export const fetchPeople = () => {
  return (dispatch) => {
    fetch('http://swapi.co/api/people', { method: 'get'})
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      dispatch(loadPeopleAction(data.results))
    })
  }
}
