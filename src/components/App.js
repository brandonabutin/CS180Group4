import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import ChangePassword from './ChangePassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import News from './News';




class App extends Component {



  render() {
    return (
      <Router>
        <div id="parent">

        <Switch>

          <Route exact path = "/" component = {LandingPage}/>
          <Route path = "/signIn" component = {SignIn}/>
          <Route path = "/changePassword" component = {ChangePassword}/>
          <Route path = "/signUp" component = {SignUp}/>
          <Route path = "/news" component = {News}/>


        </Switch>

        </div>

      </Router>
    );
  }
}

export default App
