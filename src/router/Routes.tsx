import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Component from './Components'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Component.Dash} />
        <Route exact path="/person" component={Component.Person} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
