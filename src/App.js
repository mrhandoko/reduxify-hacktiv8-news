import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import NewsList from './components/NewsList'
import loadNewsAction from './actions'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      people: [],
      keyword: ''
    }
  }

  componentDidMount() {


  }

  changeKeyword(event) {
    this.setState({
      keyword: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <nav>
          <Link to="/">News</Link>
          &nbsp;
          <Link to="/people">People</Link>
        </nav>
        <Search handleTextChange={(event) => this.changeKeyword(event)}/>
        <NewsList />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getNews: dispatch(loadNewsAction())
  }
}

export default connect(null, mapDispatchToProps)(App)
