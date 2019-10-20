import React, {Component} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (<div id="parent">

      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">180Crypto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Prices">Prices</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
          </Nav>
          <ButtonToolbar >
            <Button variant="outline-light" className="mr-1">Sign In</Button>

            <Button variant="outline-light" className="mr-1">Sign Up</Button>

            <Button variant="outline-light">
              <i class="far fa-user-circle"></i>
            </Button>
          </ButtonToolbar>
        </Container>
      </Navbar>

      <Jumbotron fluid="fluid">
        <h1 className="text-light text-center" color="light">180Crypto</h1>
        <p className="text-light text-center p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Eu lobortis elementum nibh tellus molestie. Cursus in hac habitasse platea dictumst quisque sagittis. Sit amet mauris commodo quis imperdiet massa. Sit amet consectetur adipiscing elit ut aliquam. Nunc congue nisi vitae suscipit tellus. Sagittis eu volutpat odio facilisis mauris. Convallis a cras semper auctor neque vitae tempus. Netus et malesuada fames ac turpis egestas. Eget est lorem ipsum dolor sit amet consectetur. Aliquet nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget magna fermentum iaculis eu non. Diam phasellus vestibulum lorem sed risus ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus. Id faucibus nisl tincidunt eget nullam non nisi. Nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus. Pretium aenean pharetra magna ac placerat vestibulum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Elit ut aliquam purus sit amet.

        </p>

      </Jumbotron>

    </div>);
  }
}

export default App;
