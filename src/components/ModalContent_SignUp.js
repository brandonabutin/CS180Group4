import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';




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
   console.log(user_login.email);
   if(user_login != null){
      var updates = {};
      var split1 = user_login.email.split('@');
      var split2 = split1[1].split('.')
      var update_key = split1[0].concat(split2[0]);
      updates[update_key] = '';
      updates[update_key + '/favorites'] = [];
      updates[update_key + '/favorites_lastprice'] = [];
      updates[update_key + '/favorites_symbol'] = [];
      updates[update_key + '/alert'] = false;
      firebase.database().ref().update(updates);
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
        <div className="primary" > 
        <button class="generic-button" className="close-button" onClick={this.props.closeModal}>
            close
          </button>
          <div className="div-title">Sign Up</div>
        <div className="secondary">
          <form onSubmit={this.handleSubmit}>
          User:
          <input type="text" value={this.state.user}   onChange={this.handleChangeUser} /><br/>
          Password:
          <input type="text" value={this.state.pass}   onChange={this.handleChangePass}/><br/>
          <input type="submit" value="Submit" />
          </form>    
        </div>
        </div>
       </React.Fragment>,
      document.body
    );
  }
}
export default ModalContent_SignUp;