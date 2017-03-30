import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import People from './components/People'
import store from './store'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
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
