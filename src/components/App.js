import React, {Component} from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'

import Main from './Main'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {


  constructor(props){
    super(props)

    this.changePassword = this.changePassword.bind(this)
  }

  changePassword(){
    this.props.history.push('/changePassword')
  }

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
          <ButtonToolbar>
            <Button variant="primary" className="">Sign In</Button>

            <Button variant="primary" className="">Sign Up</Button>

            <Dropdown className="mr-auto">

              <Dropdown.Toggle>
                <Button variant="primary">
                  <i class="far fa-user-circle"></i>
                </Button>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item as="button" onClick = {this.changePassword}>Change Password</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </ButtonToolbar>
        </Container>
      </Navbar>

      <Jumbotron fluid="fluid">
        <h1 className="text-light text-center" color="light">180Crypto</h1>
        <p className="text-light text-center p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Eu lobortis elementum nibh tellus molestie. Cursus in hac habitasse platea dictumst quisque sagittis. Sit amet mauris commodo quis imperdiet massa. Sit amet consectetur adipiscing elit ut aliquam. Nunc congue nisi vitae suscipit tellus. Sagittis eu volutpat odio facilisis mauris. Convallis a cras semper auctor neque vitae tempus. Netus et malesuada fames ac turpis egestas. Eget est lorem ipsum dolor sit amet consectetur. Aliquet nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget magna fermentum iaculis eu non. Diam phasellus vestibulum lorem sed risus ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus. Id faucibus nisl tincidunt eget nullam non nisi. Nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus. Pretium aenean pharetra magna ac placerat vestibulum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Elit ut aliquam purus sit amet.

        </p>

      </Jumbotron>

      <Container>
        <Row>
          <Col m="auto">
            <InputGroup className="px-5">
              <FormControl
                placeholder="Search crypto"
                aria-label = "Search crypto"
              />
              <InputGroup.Append>
                <Button variant="primary">
                  <i class="fas fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>

    </div>);
  }
}

export default withRouter(App);
