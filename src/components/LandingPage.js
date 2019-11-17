import React, {Component} from 'react';
import './App.css';

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
import firebase, {auth, provider} from './firebase.js';
import ListButton from './ListButton'

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result => {
    const user = result.user;
    document.write('Hello ${data.displayName}');
  }).catch(console.log)
}

class LandingPage extends Component {

  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      currency: [],
      items: [],
      user: null,
      USD: "todo ",
      USD2: ''
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.changePassword = this.changePassword.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signUp = this.signUp.bind(this)
  }

  changePassword() {
    this.props.history.push('/changePassword')
  }
  signIn() {
    this.props.history.push('/signIn')
  }
  signUp() {
    this.props.history.push('/signUp')
  }

  handleChange(e) {
    /* ... */
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({user: null});
    });
  }
  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({user});
    });
  }

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR').then(response => {
      return response.json();
    }).then(result => {
      
      const USD2 = result.USD2
      this.setState({currency: result, USD: result.USD, USD2});
    });
  }

  render() {
    const display = this.USD;

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
            {
              this.state.user
                ? <Button variant="primary" className="" onClick={this.logout}>Sign Out</Button>
                : <Button variant="primary" className="" onClick={this.signIn}>Sign In</Button>
            }
            {
              this.state.user
                ? <Dropdown className="mr-auto">

                    <Dropdown.Toggle>
                      <Button variant="primary">
                        <img src={this.state.user.photoURL} height="32" width="32"/>
                      </Button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" onClick={this.changePassword}>Change Password</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={this.logout}>Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                : <div></div>
            }
          </ButtonToolbar>
        </Container>
      </Navbar>

      <Jumbotron >
        <h1 className="text-light text-center" color="light">180Crypto</h1>
        <p className="text-light text-center p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Eu lobortis elementum nibh tellus molestie. Cursus in hac habitasse platea dictumst quisque sagittis. Sit amet mauris commodo quis imperdiet massa. Sit amet consectetur adipiscing elit ut aliquam. Nunc congue nisi vitae suscipit tellus. Sagittis eu volutpat odio facilisis mauris. Convallis a cras semper auctor neque vitae tempus. Netus et malesuada fames ac turpis egestas. Eget est lorem ipsum dolor sit amet consectetur. Aliquet nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget magna fermentum iaculis eu non. Diam phasellus vestibulum lorem sed risus ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus. Id faucibus nisl tincidunt eget nullam non nisi. Nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus. Pretium aenean pharetra magna ac placerat vestibulum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Elit ut aliquam purus sit amet.

        </p>

      </Jumbotron>



      <Container className="mx-auto">
        <h2 className="Table-header text-center">Coin Listings</h2>
        <Row>
          <Col>

            <ListButton/>
          </Col>
        </Row>
      </Container>

    </div>);
  }
}

export default LandingPage
