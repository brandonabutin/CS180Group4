import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export class ModalContent_PassChange extends Component {
  constructor(props) {
     super(props);
     this.state = {
       user: '',
       pass:'',
       string_test:'this should return a string'
     };
     //this.handleChange = this.handleChange.bind(this);
     //this.handleSubmit = this.handleSubmit.bind(this);
   }
  handleSubmit = (event) =>{
    var user = firebase.auth().currentUser;
    user.updatePassword(this.state.pass).then(function() {
  // Update successful
    alert("Password Changed!")
    this.props.closeModal();
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

      <aside className="modal-cover" >
      <div className = "backdrop">
      </div>
      <div className="modal-area" >
        <Card className="mx-auto" border="primary">
          <Card.Header>Change Password</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>


              <Form.Group controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" value={this.state.pass} onChange={this.handleChangePass} placeholder="Password"/>
                <Form.Text className="Please enter a secure password."></Form.Text>
              </Form.Group>

              <Button className = ""variant="primary" type="submit" onSubmit={this.handleSubmit}>
                Submit
              </Button>

              <Button className="_modal-close " style={{float: 'right'}} onClick={this.props.closeModal}>
                Close
              </Button>
              </Form>
            </Card.Body>
          </Card>
      </div>

      </aside>,
      document.body
    );
  }
}
export default ModalContent_PassChange;
