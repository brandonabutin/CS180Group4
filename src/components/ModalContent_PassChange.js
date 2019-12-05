import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class ModalContent_PassChange extends Component {
  constructor(props) {
     super(props);
     this.state = {
       user: '',
       pass:'',
       string_test:'this should return a string'
     };
   }
  handleSubmit = (event) =>{
    var user = firebase.auth().currentUser;
    user.updatePassword(this.state.pass).then(function() {
  // Update successful
    alert("Password Changed!")
}).catch(function(error) {
  // An error happened.
    alert("New Password too Weak")
});


    console.log('password updated');

}


handleChangeUser  = (event) =>{
    this.setState({user: event.target.value});

    console.log(this.state);
    //console.log(event.target.user);

  }
handleChangePass  = (event) =>{

    this.setState({pass: event.target.value});
    console.log(this.state);
    //console.log(event.target.user);

  }
  render() {
    return ReactDOM.createPortal(

      <React.Fragment>
      <div className = "backdrop">
      </div>
        <div className="mx-auto float" >
        <Card className="mx-auto" border="primary" style={{
            width: '35rem'
          }}>
          <Card.Header className ="pt-3">
            <span style={{
                fontWeight: "bold",
                fontSize: 25
              }}>
            Change Password
          </span>
            <Button variant="link" style={{float: 'right'}} onClick={this.props.closeModal} >
              <i class="fas fa-times"></i>
            </Button>
          </Card.Header>

          <Card.Body>
            <Form onSubmit={this.handleSubmit}>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" value={this.state.pass} onChange={this.handleChangePass} placeholder="Password"/>
                <Form.Text className="text-muted">Please enter a secure password.</Form.Text>
              </Form.Group>

              <Button className = ""variant="primary" type="submit" onSubmit={this.handleSubmit} style={{float: 'right'}}>
                Submit
              </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
       </React.Fragment>,
      document.body
    );
  }
}
export default ModalContent_PassChange;
