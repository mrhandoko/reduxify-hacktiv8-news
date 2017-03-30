import React from 'react'
import { connect } from 'react-redux'

import { fetchNews, getNewsFilter } from '../actions'
import styles from './NewsList.style';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    return (
      <div>
        {this.props.news.length === 0  && <h1>Loading</h1>}
        <ul>
        {
          this.props.news.map((item, index) => (
            <li key={index} style={styles.items}><a href={item.url}>{item.title}</a></li>
          ))
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.filteredNews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNews()),
    getNewsFilter: (result) => dispatch(getNewsFilter(result))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
