import React, {Component} from 'react';
import './App.css';
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
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class ChangePassword extends Component {

  constructor(props) {
    super(props)

    this.done = this.done.bind(this)
  }

  done() {
    this.props.history.push('/')
  }
  render() {
    return (<div> < Navbar bg = "primary" variant = "dark" sticky = "top" > <Container>
      <Navbar.Brand href="#home">180Crypto</Navbar.Brand>
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
            <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </ButtonToolbar>
    </Container>
  </Navbar>
  <Container className ="passwordCard" >
    <Row className="mx-auto">
      <Col className= "mx-auto">
        <Card className= "mx-auto" border="primary" style={{
            width: '35rem'
          }}>
          <Card.Header>Change Password</Card.Header>
          <Card.Body>
            < Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Current Password</Form.Label>
                <Form.Control type="password" placeholder="Current password"/>

              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password"/>
                  <Form.Text className="text-muted">

                  </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.done}>
                Submit
              </Button>
              < /Form></Card.Body>
            </Card>
            <br/>
          </Col>
        </Row>
  </Container>

</div>);
  }
}

export default ChangePassword
