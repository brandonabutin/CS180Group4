import React, {Component} from 'react';
import Modal_PassChange from './Modal_PassChange.js';

export class PassChangeTrigger extends Component {



  render() {
    return <button onClick={this.props.showModal} className="modal-button">
        {this.props.passChangeText}
        Change Password
    
      </button>

  }
}

export default PassChangeTrigger;