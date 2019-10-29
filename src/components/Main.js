import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import ChangePassword from './ChangePassword'
import SignIn from './SignIn'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/changePassword' component={ChangePassword}/>
      <Route path='/signIn' component={SignIn}/>
    </Switch>
  </main>
)

export default Main
