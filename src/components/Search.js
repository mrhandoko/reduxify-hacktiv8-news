import React from 'react'

import { connect } from 'react-redux'

const Search = props => (
  <form>
    <input placeholder="search...." type="text" onChange={ event => props.keyword(event.target.value) } />
  </form>
)

const mapDispatchToProps = (dispatch) => {
  return {
    keyword: (data) => {
      dispatch ({
        type: 'FILTER_KEYWORD',
        payload: data
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
