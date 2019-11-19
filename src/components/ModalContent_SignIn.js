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
     //this.handleChange = this.handleChange.bind(this);
     //this.handleSubmit = this.handleSubmit.bind(this);
   } 
  handleSubmit = (event) =>{

    firebase.auth().signInWithEmailAndPassword(this.state.user, this.state.pass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
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

      <aside className="modal-cover" >
      <div className = "backdrop">
      </div>
        <div className="modal-area" >
          <button className="_modal-close" onClick={this.props.closeModal}>
            close
          </button>
          <div className="modal-body">Sign In</div>
          <form onSubmit={this.handleSubmit}>
          User:
          <input type="text" value={this.state.user}   onChange={this.handleChangeUser} /><br/>
          Password:
          <input type="text" value={this.state.pass}   onChange={this.handleChangePass}/><br/>
          <input type="submit" value="Submit" />
          <button className="_forgot-password" onClick={this.props.forgotPassword}>
          Forgot Password
          </button>
          </form>    
              
        </div>
      </aside>,
      document.body
    );
  }
}
export default ModalContent_SignIn;