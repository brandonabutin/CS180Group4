import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';

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
        <div className="primary" > 
        <button className="close-button" onClick={this.props.closeModal}>
            close
          </button>
        <div className="div-title">Sign In</div>
        <div className="secondary"> 
          
          <form class="generic-form" onSubmit={this.handleSubmit}>
          User:
          <input type="text" value={this.state.user}   onChange={this.handleChangeUser} /><br/>
          Password:
          <input type="text" value={this.state.pass}   onChange={this.handleChangePass}/><br/>
          <input class="generic-button" type="submit" value="Submit" />
          <button className="forgot-password" class="generic-button" onClick={this.props.forgotPassword}>
          Forgot Password
          </button>
          </form>    
        </div>
        </div>
       </React.Fragment>,
      document.body
    );
  }
}
export default ModalContent_SignIn;