import React, {Component} from 'react';
import ModalContent_SignUp from './ModalContent_SignUp.js';
import Dropdown from 'react-bootstrap/Dropdown';





export class Modal_SignUp extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false
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


  render() {
    return (

    <React.Fragment>
        <p onClick={this.showModal} className="modal-button">Sign Up</p>
        {this.state.isShown?<ModalContent_SignUp closeModal={this.closeModal}/>:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal_SignUp;
