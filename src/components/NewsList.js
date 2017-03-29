import React from 'react'
import { connect } from 'react-redux'

const NewsList = (props) => {
  // const filteredData = props.data.filter((item, index) => {
  //   let pattern = new RegExp(props.handleKeyword, 'gi')
  //   return pattern.test(item.title)
  // })
  // console.log(props);
  return (
    <div>
      {props.data.length === 0 && <h1>Loading</h1>}
      <ul>
      {
        props.data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))
      }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, null)(NewsList)
