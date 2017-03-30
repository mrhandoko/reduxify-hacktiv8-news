import * as ActionTypes from '../actions/constants'

export const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_PEOPLE:
      return action.payload
    default:
      return state
  }
}
