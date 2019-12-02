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
import FooterPage from './FooterPage'

import Modal from './Modal.js';
import ModalTrigger from './ModalTrigger.js';
import ModalContent from './ModalContent.js';
import SignInTrigger from './SignInTrigger.js'
import Modal_SignIn from './Modal_SignIn.js'
import ModalContent_PassChange from './ModalContent_PassChange.js';
import PassChangeTrigger from './PassChangeTrigger.js'
import Modal_PassChange from './Modal_PassChange.js'
import axios from 'axios';

const cryptocurrencies = require('cryptocurrencies');

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
      USD2: '',
      transferState: null,
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.changePassword = this.changePassword.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signUp = this.signUp.bind(this)
    this.makeSearch = this.makeSearch.bind(this);
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

  makeSearch() {
      const search = document.getElementById("searchInput").value.toLowerCase();
      var symbol;
      symbol = Object.keys(cryptocurrencies).find(key => cryptocurrencies[key].toString().toLowerCase() == search)
      console.log(symbol);
      var apiResponse;
      if(symbol) {
        axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + symbol + "&tsyms=USD")
          .then(res => {
            console.log(res);
            if (res.request.readyState == 4 && res.request.status == 200) {
              try {
                var currencyNameTemp = search;
                var currencyRawDataTemp = res.data.RAW[symbol].USD;
                var currencyDisplayDataTemp = res.data.DISPLAY[symbol].USD;
                var imageUrlTemp = res.data.DISPLAY[symbol].USD.IMAGEURL;
                var urlSymbolTemp = res.data.DISPLAY[symbol].USD.FROMSYMBOL;
                this.setState({transferState: {
                  currencyname: currencyNameTemp,
                  currency_raw_data: currencyRawDataTemp,
                  currency_display_data: currencyDisplayDataTemp,
                  imageurl: imageUrlTemp,
                  urlsymbol: symbol,
                }})
              } catch(e) {
                console.log("failed history push");
                console.log(e);
              }
            }
          })
        }
    }


  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR').then(response => {
      return response.json();
    }).then(result => {

      const USD2 = result.USD2
      this.setState({currency: result, USD: result.USD, USD2});
    });
  }

  modalProps = {
    triggerText: 'Sign Up',
    signInText:'Sign In',
    passChangeText:'Change Password'

  };

  loginSuccess = () =>{
      this.setState({
        user:true
      });

  }

  render() {
    const display = this.USD;

    if(this.state.transferState) {
      this.props.history.push({
        pathname:"/cryptocurrency",
        state: this.state.transferState,
      })
    }

    return (<div id="parent">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand> <i class="fas fa-coins"></i>{' '}180Crypto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>Prices</Nav.Link>
            <Nav.Link>News</Nav.Link>
          </Nav>
          <ButtonToolbar>
            {
              this.state.user
                ? <Dropdown className="mr-auto">

                    <Dropdown.Toggle>
                      <Button variant="primary">
                        <i class="far fa-user-circle"></i>
                      </Button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" ><Modal_PassChange modalProps={this.modalProps} /></Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={this.logout}>Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                : <Dropdown className="mr-auto">

                    <Dropdown.Toggle>
                      <Button variant="primary">
                        <i class="far fa-user-circle"></i>
                      </Button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2" ><Modal className testbool_fromparent = {this.state.testbool} modalProps={this.modalProps} callbackFromParent={this.myCallback} />  </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" ><Modal_SignIn modalProps={this.modalProps} loginSuccess = {this.loginSuccess}/> </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
              id="searchInput"
            />
              <InputGroup.Append>
              <Button variant="light" onClick={() => this.makeSearch()}>
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
