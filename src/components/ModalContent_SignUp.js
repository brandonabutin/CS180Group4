import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




export class ModalContent_SignUp extends Component {
  constructor(props) {
     super(props);
     this.state = {
       user: '',
       pass:'',
       string_test:'this should return a string'
     };

   }
  handleSubmit = (event) =>{

    firebase.auth().createUserWithEmailAndPassword(this.state.user, this.state.pass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
    }
    else if (errorCode == 'auth/invalid-email') {
    alert('Invalid Email');
    }
    else if(errorCode == 'auth/email-already-in-use'){
      alert('Email Already in use');
    }
    else{
      alert('Account Created');
      this.props.closeModal();
      console.log("else statemasdfas");
    }
    });
   var user_login = firebase.auth().currentUser;
   //console.log(user_login.email);
   if(user_login != null){
      this.props.loginSuccess();
      var updates = {};
      var updates_fav = {};
      var updates_lp = {};
      var updates_sym = {};
      var updates_alert = {};
      var split1 = user_login.email.split('@');
      var split2 = split1[1].split('.')
      var update_key = split1[0].concat(split2[0]);
      updates[update_key] = '';    
      updates_fav[update_key + '/favorites'] = ["TEST"];
      updates_lp[update_key + '/favorites_price'] = ["TEST"];
      updates_sym[update_key + '/favorites_symbol'] = ["TEST"];
      updates_alert[update_key + '/alert'] = false;
      
      firebase.database().ref().update(updates);
      firebase.database().ref().update(updates_fav);
      firebase.database().ref().update(updates_lp);
      firebase.database().ref().update(updates_sym);
      firebase.database().ref().update(updates_alert);
      alert('Account Created');
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
            Sign Up
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
                <Form.Text className="text-muted">Please enter a secure password.</Form.Text>
              </Form.Group>

              <Button className = ""variant="primary" type="submit" onSubmit={this.handleSubmit} style={{float: 'right'}}>
                Create account
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
export default ModalContent_SignUp;
