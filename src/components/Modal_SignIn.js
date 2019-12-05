import React, {Component} from 'react';
import ModalContent_SignIn from './ModalContent_SignIn.js';
import ModalContent_PassChange from './ModalContent_PassChange.js';
import Dropdown from 'react-bootstrap/Dropdown';





export class Modal_SignIn extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      changeShown:false
    };
  }

showModal = () => {
    this.setState({ isShown: true });
    console.log(this.state.isShown);
  };

closeModal = () => {
   this.setState({ isShown: false });
   console.log(this.state.isShown);
 };

closePass = () => {
   this.setState({ changeShown: false });
   console.log(this.state.changeShown);
 };

 forgotPassword = () => {
 	this.setState({ isShown: false , changeShown: true});

 }


  render() {
    //return <ModalTrigger triggerText={this.props.modalProps.triggerText} /> ;
    return (

    <React.Fragment>
        <p onClick={this.showModal} className="modal-button">Sign In</p>
        {this.state.isShown?<ModalContent_SignIn forgotPassword={this.forgotPassword} closeModal={this.closeModal} loginSuccess = {this.props.loginSuccess}/>:<React.Fragment/>}
        {this.state.changeShown?<ModalContent_PassChange  closeModal={this.closePass}/>:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal_SignIn;
