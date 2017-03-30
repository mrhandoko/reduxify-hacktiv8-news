import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../logo.svg'
import '../App.css'
import PeopleList from './PeopleList'

const People = () => (
  (
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
      <PeopleList />
    </div>
  )
)

export default People
