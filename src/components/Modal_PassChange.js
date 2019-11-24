import React, {Component} from 'react';
import PassChangeTrigger from './PassChangeTrigger.js';
import ModalContent_PassChange from './ModalContent_PassChange.js';




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
        <PassChangeTrigger showModal={this.showModal}  triggerText={this.props.modalProps.passChangeText} />
        {this.state.isShown?<ModalContent_PassChange closeModal={this.closeModal}/>:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal;