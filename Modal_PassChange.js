import React, {Component} from 'react';
import ModalContent_PassChange from './ModalContent_PassChange.js';
import Dropdown from 'react-bootstrap/Dropdown';




export class Modal extends Component {
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
    //return <ModalTrigger triggerText={this.props.modalProps.triggerText} /> ;
    return (

    <React.Fragment>
        <p onClick={this.showModal} className="modal-button">Change Password</p>
        {this.state.isShown?<ModalContent_PassChange closeModal={this.closeModal}/>:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal;
