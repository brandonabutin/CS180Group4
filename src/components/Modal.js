import React, {Component} from 'react';
import ModalTrigger from './ModalTrigger.js';
import ModalContent from './ModalContent.js';




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
        <ModalTrigger showModal={this.showModal}  triggerText={this.props.modalProps.triggerText} />
        {this.state.isShown?<ModalContent closeModal={this.closeModal}/>:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal;
