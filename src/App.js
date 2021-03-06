import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}