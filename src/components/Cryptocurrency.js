import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

class Cryptocurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyname: '',
      display_data: {},
      raw_data: {},
      imageurl: ''
    }
    this.done = this.done.bind(this)
  }
  componentDidMount() {
    const currencynameparam = this.props.location.state.currencyname;
    const display_data = this.props.location.state.currecy_display_data;
    const raw_data = this.props.location.state.currency_raw_data;
    const imageurlparam = this.props.location.state.imageurl;

    console.log(imageurlparam)
    //console.log(raw_data)
    this.setState({currencyname: currencynameparam, display_data: display_data, raw_data: raw_data, imageurl: imageurlparam});
  }
  done() {
    this.props.history.push('/')
  }
  render() {
    console.log("www.cryptocompare.com" + this.state.imageurl)
    return (<div className="app">

      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand onClick={this.done}>180Crypto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Prices">Prices</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
          </Nav>
          <ButtonToolbar>

            <Dropdown className="mr-auto">

              <Dropdown.Toggle>
                <Button variant="primary">
                  <i class="far fa-user-circle"></i>
                </Button>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item as="button" onClick={this.changePassword}>Change Password</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </ButtonToolbar>
        </Container>
      </Navbar>

      <Container className="cryptoCard pt-4">

        <Row>
          <Col className="ml-auto">

            <Card className="mx-auto">
              <Card.Img className="coinImage p-2" variant="top" src={"https://www.cryptocompare.com" + this.state.imageurl}/>
              <Card.Title className="mr-auto pl-3">
                <span style={{
                    fontWeight: "bold",
                    fontSize: 25
                  }}>{this.state.currencyname}
                </span>
                <span style={{
                    color: 'gray',
                    fontSize: 20
                  }}> {this.state.display_data['FROMSYMBOL']}</span>
              </Card.Title>
              <Card.Body>

                <ListGroup>
                  <ListGroup.Item>
                    <span style={{
                        color: 'gray',
                        fontSize: 20
                      }}>Current Price:
                    </span>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: 18
                      }}> ${this.state.raw_data['PRICE']}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{
                        color: 'gray',
                        fontSize: 20
                      }}>Daily Low:
                    </span>

                    <span style={{
                        fontWeight: "bold",
                        fontSize: 18
                      }}> {this.state.display_data['LOWDAY']}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{
                        color: 'gray',
                        fontSize: 20
                      }}>Daily High:
                    </span>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: 18
                      }}> {this.state.display_data['HIGHDAY']}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{
                        color: 'gray',
                        fontSize: 20
                      }}>24 Hour Change:
                    </span>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: 18
                      }}> {this.state.display_data['CHANGE24HOUR']}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{
                        color: 'gray',
                        fontSize: 20
                      }}>1 Hour Change:
                    </span>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: 18
                      }}> {this.state.display_data['CHANGEHOUR']}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{
                        color: 'gray',
                        fontSize: 20
                      }}>24 Hour Percent Change:
                    </span>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: 18
                      }}> {this.state.display_data['CHANGEPCT24HOUR']}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{
                        color: 'gray',
                        fontSize: 20
                      }}>1 Hour Percent Change:
                    </span>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: 18
                      }}> {this.state.display_data['CHANGEPCTHOUR']}</span>
                  </ListGroup.Item>
                </ListGroup>

              </Card.Body>

            </Card>
          </Col>
        </Row>

      </Container>

    </div>);
  }
}
export default Cryptocurrency;
