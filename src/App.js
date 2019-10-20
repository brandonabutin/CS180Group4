import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class App extends Component{
  render(){
    return(
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">180Crypto</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#Prices">Home</Nav.Link>
          <Nav.Link href="#Products">Features</Nav.Link>
          <Nav.Link href="#News">Pricing</Nav.Link>
        </Nav>
        <ButtonToolbar >
          <Button variant="outline-light" className = "mr-1">Sign In</Button>

          <Button variant="outline-light" className = "ml-1">Sign Up</Button>
        </ButtonToolbar>
      </Navbar>
    );
  }
}

export default App;
