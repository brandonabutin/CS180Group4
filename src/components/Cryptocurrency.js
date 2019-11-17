import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import {Line} from 'react-chartjs-2';
import axios from 'axios'


const options = {
  maintainAspectRatio: true,
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: '$ USD'
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Time (Days)'
        }
      }
    ]
  }
}

class Cryptocurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyname: '',
      display_data: {},
      raw_data: {},
      imageurl: '',
      urlsymbol: '',
      graphdata: [],
      data: [],
      about: []
    }
    this.done = this.done.bind(this)

  }

  componentDidMount() {
    window.scrollTo(0, 0)

    const currencynameparam = this.props.location.state.currencyname;
    const display_data = this.props.location.state.currecy_display_data;
    const raw_data = this.props.location.state.currency_raw_data;
    const imageurlparam = this.props.location.state.imageurl;
    const urlsymbol = this.props.location.state.urlsymbol;
    console.log(urlsymbol)

    this.getMeta(urlsymbol);

    axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + urlsymbol + "&tsym=USD&limit=10").then(res => {
      var y_list = [];
      const response = res['data']['Data']['Data'];
      console.log(response)
      this.setState({graphdata: response});

      for (let value in this.state.graphdata) {
        y_list.push(this.state.graphdata[value]['close'])
      }
      var fetch_data = {
        labels: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        datasets: [
          {
            label: 'Price over last 10 days',
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
            data: y_list
          }
        ]
      };
      this.setState({data: fetch_data});
      console.log(this.state.data)
    })

    //console.log(raw_data)
    this.setState({currencyname: currencynameparam, display_data: display_data, raw_data: raw_data, imageurl: imageurlparam});
  }
  done() {
    this.props.history.push('/')
  }

  getMeta(coin) {
    axios.get("https://api.nomics.com/v1/currencies?key=026073210569d2c64ca3a1ccd5d87873&ids=" + coin + "&attributes=website_url,description,whitepaper_url").then(res => {
      const about = res['data'];
      console.log(about)
      this.setState({about: about});


    })

  }

  render() {
    //console.log(this.state.graphdata)
    //console.log("www.cryptocompare.com" + this.state.imageurl)


    console.log(this.state.data)
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
                    }}>{this.state.currencyname}{"\n"}
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
                        }}>Current Price:{"\n"}
                      </span>
                      <span style={{
                          fontWeight: "bold",
                          fontSize: 18
                        }}>
                        {this.state.display_data['PRICE']}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 20
                        }}>Daily High:{"\n"}
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
                        }}>Daily Low:{"\n"}
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
                        }}>24 Hour Change:{"\n"}
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
                        }}>1 Hour Change:{"\n"}
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
                        }}>24 Hour Percent Change:{"\n"}
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
                        }}>1 Hour Percent Change:{"\n"}
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

          <div className="m-auto pt-4">

            <Col>
              <Card style={{
                  width: '45rem'
                }}>
                <Card.Body>
                  <Card.Title>Price Graph of {this.state.currencyname}</Card.Title>
                  <Line data={this.state.data} options={options}/>
                </Card.Body>
              </Card>
            </Col>
          </div>

          <div className="mr-auto pt-2">

            <Col>
              <Card style={{
                  width: '22rem'
                }}>
                <Card.Header>Convert</Card.Header>
                <Card.Body>
                  <Card.Title>{this.state.currencyname}</Card.Title>
                  <Card.Text>BitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoinBitcoin</Card.Text>

                  <Card.Text>USagittis eu volutpat odio facilisis maurisSagittis eu volutpat odio facilisis maurisSagittis eu volutpat odio facilisis maurisSagittis eu volutpat odio facilisis maurisSagittis eu volutpat odio facilisis mauris</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>

          <div className="mx-auto pt-2">
            <Col>
              {
                this.state.about.map((info, i) => {
                  return (<Accordion>
                    <Card style={{
                        width: '45rem'
                      }}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Description
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">

                        <Card.Body>
                            {info.description}
                            <p>{"\n"}</p>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              <i class="fas fa-chevron-up"></i>
                            </Accordion.Toggle>
                        </Card.Body>

                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          Links
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <a href={info.website_url}>
                            <i class="fas fa-globe"></i>
                            {"\n"}Website
                          </a>
                          <p>{"\n"}</p>
                          <a href={info.whitepaper_url}>
                            <i class="far fa-file-alt"></i>
                            {"\n"}Whitepaper
                          </a>
                          <p>{"\n"}</p>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">

                            <i class="fas fa-chevron-up"></i>
                          </Accordion.Toggle>

                        </Card.Body>

                      </Accordion.Collapse>
                    </Card>
                  </Accordion>);
                })
              }
            </Col>
          </div>

        </Row>


      </Container>

    </div>);
  }
}

export default Cryptocurrency;
