import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import App from './App'
import ChangePassword from './ChangePassword'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/changePassword' component={ChangePassword}/>
    </Switch>
  </main>
)

export default Main
