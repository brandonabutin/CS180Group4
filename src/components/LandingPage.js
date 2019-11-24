import React, {Component} from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
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
import FooterPage from './FooterPage'


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
      console.log(JSON.stringify(result))
      console.log(JSON.stringify(result.USD))
      const USD2 = result.USD2
      this.setState({currency: result, USD: result.USD, USD2});
    });
  }

  render() {
    const display = this.USD;
    console.log(JSON.stringify(display));
    console.log(JSON.stringify(this.currency));
    console.log(JSON.stringify(this.props.USD));
    console.log(this.props.USD);
    console.log("test");
    console.log(this.props.USD2);
    return (<div id="parent">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand> <i class="fas fa-coins"></i>{' '}180Crypto</Navbar.Brand>
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
        <h1 className="text-light text-center" color="light"><i class="fas fa-coins"></i>{' '}180Crypto</h1>
        <h2 className="text-light text-center pb-3">Find your coin.

        </h2>
        <Container className = "px-5">
        <Row className = "px-5">
          <Col className = "px-5">
            <InputGroup className="px-5">
              <FormControl
                placeholder="Search for a cryptocurrency"
                aria-label = "Search crypto"
              />
              <InputGroup.Append>
                <Button variant="light">
                  <i class="fas fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      </Jumbotron>



      <Container className="mx-auto">
        <h2 className="Table-header text-center">Top 25 Cryptocurrencies by Market Cap</h2>
        <Row>
          <Col>

            <ListButton/>
          </Col>
        </Row>
      </Container>
      <FooterPage/>


    </div>);
  }
}

export default LandingPage
