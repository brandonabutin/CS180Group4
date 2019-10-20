import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
class App extends Component{
  render(){
    return(
      <div id="parent">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">180Crypto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Prices">Home</Nav.Link>
            <Nav.Link href="#Products">Features</Nav.Link>
            <Nav.Link href="#News">Pricing</Nav.Link>
          </Nav>
          <ButtonToolbar >
            <Button variant="outline-light" className = "mr-1">Sign In</Button>

            <Button variant="outline-light">Sign Up</Button>
          </ButtonToolbar>
        </Navbar>




      <Jumbotron>
        <h1 class ="text-center">180Crypto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </Jumbotron>

      </div>
    );
  }
}

export default App;
