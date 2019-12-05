import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export class ModalContent_SignIn extends Component {
  constructor(props) {
     super(props);
     this.state = {
       user: '',
       pass:'',
       string_test:'this should return a string'
     };
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
      alert('Logged In');
      this.props.closeModal();
    }
    });
   var user = firebase.auth().currentUser;
   if(user){
   	this.props.loginSuccess();
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
            Sign In
          </span>
            <Button variant="link" style={{float: 'right'}} onClick={this.props.closeModal} >
              <i class="fas fa-times"></i>
            </Button>
          </Card.Header>

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

              <Button className = ""variant="primary" type="submit" onSubmit={this.handleSubmit} style={{float: 'right'}}>
                Sign In
              </Button>
              <Button className="_modal-close ml-1" variant="outline-primary" onClick={this.props.forgotPassword}>
                Forgot Password?
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
export default ModalContent_SignIn;
