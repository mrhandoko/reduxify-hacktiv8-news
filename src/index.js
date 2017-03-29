import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import People from './components/People'
import './index.css'
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/news" component={App} />
        <Route path="/people" component={People} />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root')
)
