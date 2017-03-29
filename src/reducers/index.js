const reducer = (state = {data: [], people: [], keyword: ''}, action) => {
  switch (action.type) {
    case 'LOAD_NEWS':

      fetch('https://hn.algolia.com/api/v1/search?query=redux').then((response) => {
        return response.json()
      }).then((data) => {
        // state.data = data.hits
        console.log(data.hits);
        return data.hits
        // return Object.assign({}, state, {data: [{title: 'hallooooo'}]})
      })

    case 'LOAD_PEOPLES':
      return state
    default:
      return state
  }

}

export default reducer
