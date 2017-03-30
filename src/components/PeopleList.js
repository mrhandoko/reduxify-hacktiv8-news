import React from 'react'
import { connect } from 'react-redux'

import { loadPeopleAction } from '../actions'

class PeopleList extends React.Component {

  componentDidMount() {
    fetch('https://swapi.co/api/people').then((response) => {
      return response.json()
    }).then((data) => {
      this.props.loadPeople(data.results)
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.people.length > 0 ?
            this.props.people.map((item, index) => {
              return (
                <li key={index}>{item.name}</li>
              )
            }) :
            <h1>loading</h1>
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    loadPeople: (data) => {
      dispatch(loadPeopleAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
