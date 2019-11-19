import React, {Component} from 'react';
import Modal from './Modal.js';

export class ModalTrigger extends Component {



  render() {
    return <button onClick={this.props.showModal} className="modal-button">
        {this.props.triggerText}
    
      </button>

  }
}

export default ModalTrigger;