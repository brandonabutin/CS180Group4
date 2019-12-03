import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';

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
        <div className="primary" >
          <button className="close-button" onClick={this.props.closeModal}>
            close
          </button>
          <div className="div-title"> Change Password</div>
          <div className="secondary" >
          <form onSubmit={this.handleSubmit}>
          New Password:
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
export default ModalContent_PassChange;