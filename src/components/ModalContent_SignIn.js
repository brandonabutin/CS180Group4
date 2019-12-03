import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export class ModalContent_SignIn extends Component {
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

    firebase.auth().signInWithEmailAndPassword(this.state.user, this.state.pass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/user-not-found') {
    alert('Invalid User');
    }
    else if (errorCode == 'auth/invalid-email') {
    alert('Invalid Email');
    }
    else if(errorCode == 'auth/wrong-password'){
      alert('Invalid Password');
    }
    else{
      alert('Account Created');
      this.props.closeModal();
    }
    });
   var user = firebase.auth().currentUser;
   if(user){
   	this.props.loginSuccess();
    console.log("logged in")
   }
   console.log(this.state.user);
   console.log(this.state.string_test);
   console.log("login test");
   event.preventDefault();
}
print_test = (event) =>{

  console.log(typeof(event.target.user));
  console.log("no definition");
  console.log(this.props.user);
  console.log(this.user);
  console.log(this.state.user);
  console.log(typeof("test"));

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
          <Card.Header>Sign In</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" value={this.state.user} onChange={this.handleChangeUser} placeholder="Email"/>

              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={this.state.pass} onChange={this.handleChangePass} placeholder="Password"/>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Button className = ""variant="primary" type="submit" onSubmit={this.handleSubmit}>
                Sign In
              </Button>
              <Button className="_modal-close ml-1" onClick={this.props.forgotPassword}>
                Forgot Password?
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
export default ModalContent_SignIn;
