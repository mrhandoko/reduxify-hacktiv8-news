import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import Search from './components/Search'
import NewsList from './components/NewsList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <nav>
          <Link to="/">News</Link>
          <Link to="/people">People</Link>
        </nav>
        <Search />
        <NewsList />
      </div>
    )
  }
}

export default App
