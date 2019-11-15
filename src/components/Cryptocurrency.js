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
import {Line} from 'react-chartjs-2';

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
    window.scrollTo(0, 0)
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
    return (<div id="parent">

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

      <Container>

        <Row>
          <div className="cryptoCard pt-4">
            <Col className="ml-auto">

              <Card className="mx-auto" style={{
                  width: '22rem'
                }}>
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
                    }}>
                    {this.state.display_data['FROMSYMBOL']}</span>
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
                        }}>
                        ${this.state.raw_data['PRICE']}</span>
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
                        }}>
                        {this.state.display_data['HIGHDAY']}</span>
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
                        }}>
                        {this.state.display_data['LOWDAY']}</span>
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
                        }}>
                        {this.state.display_data['CHANGE24HOUR']}</span>
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
                        }}>
                        {this.state.display_data['CHANGEHOUR']}</span>
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
                        }}>
                        {this.state.display_data['CHANGEPCT24HOUR']}</span>
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
                        }}>
                        {this.state.display_data['CHANGEPCTHOUR']}</span>
                    </ListGroup.Item>
                  </ListGroup>

                </Card.Body>

              </Card>

            </Col>
          </div>

          <div className="mx-auto pt-4">

            <Col>
              <Card style={{
                  width: '45rem'
                }}>
                <Card.Header>Graph</Card.Header>
                <Card.Body>
                  <Card.Title>Light Card Title</Card.Title>
                  <Line data={data}/>
                </Card.Body>
              </Card>
            </Col>
          </div>

        </Row>
        <Col className="p-2">
          <Card>
            <Card.Header>News</Card.Header>
            <Card.Body>
              <Card.Title>Light Card Title</Card.Title>
              <Card.Text>
                <p className="text-dark text-center p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Eu lobortis elementum nibh tellus molestie. Cursus in hac habitasse platea dictumst quisque sagittis. Sit amet mauris commodo quis imperdiet massa. Sit amet consectetur adipiscing elit ut aliquam. Nunc congue nisi vitae suscipit tellus. Sagittis eu volutpat odio facilisis mauris. Convallis a cras semper auctor neque vitae tempus. Netus et malesuada fames ac turpis egestas. Eget est lorem ipsum dolor sit amet consectetur. Aliquet nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget magna fermentum iaculis eu non. Diam phasellus vestibulum lorem sed risus ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus. Id faucibus nisl tincidunt eget nullam non nisi. Nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus. Pretium aenean pharetra magna ac placerat vestibulum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Elit ut aliquam purus sit amet. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Eu lobortis elementum nibh tellus molestie. Cursus in hac habitasse platea dictumst quisque sagittis. Sit amet mauris commodo quis imperdiet massa. Sit amet consectetur adipiscing elit ut aliquam. Nunc congue nisi vitae suscipit tellus. Sagittis eu volutpat odio facilisis mauris. Convallis a cras semper auctor neque vitae tempus. Netus et malesuada fames ac turpis egestas. Eget est lorem ipsum dolor sit amet consectetur. Aliquet nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget magna fermentum iaculis eu non. Diam phasellus vestibulum lorem sed risus ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus. Id faucibus nisl tincidunt eget nullam non nisi. Nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus. Pretium aenean pharetra magna ac placerat vestibulum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Elit ut aliquam purus sit amet. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Eu lobortis elementum nibh tellus molestie. Cursus in hac habitasse platea dictumst quisque sagittis. Sit amet mauris commodo quis imperdiet massa. Sit amet consectetur adipiscing elit ut aliquam. Nunc congue nisi vitae suscipit tellus. Sagittis eu volutpat odio facilisis mauris. Convallis a cras semper auctor neque vitae tempus. Netus et malesuada fames ac turpis egestas. Eget est lorem ipsum dolor sit amet consectetur. Aliquet nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget magna fermentum iaculis eu non. Diam phasellus vestibulum lorem sed risus ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus. Id faucibus nisl tincidunt eget nullam non nisi. Nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus. Pretium aenean pharetra magna ac placerat vestibulum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Elit ut aliquam purus sit amet. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Eu lobortis elementum nibh tellus molestie. Cursus in hac habitasse platea dictumst quisque sagittis. Sit amet mauris commodo quis imperdiet massa. Sit amet consectetur adipiscing elit ut aliquam. Nunc congue nisi vitae suscipit tellus. Sagittis eu volutpat odio facilisis mauris. Convallis a cras semper auctor neque vitae tempus. Netus et malesuada fames ac turpis egestas. Eget est lorem ipsum dolor sit amet consectetur. Aliquet nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget magna fermentum iaculis eu non. Diam phasellus vestibulum lorem sed risus ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus. Id faucibus nisl tincidunt eget nullam non nisi. Nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus. Pretium aenean pharetra magna ac placerat vestibulum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Elit ut aliquam purus sit amet.

                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Row></Row>

      </Container>

    </div>);
  }
}

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40
      ]
    }
  ]
};
export default Cryptocurrency;
