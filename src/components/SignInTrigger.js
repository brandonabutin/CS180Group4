import React, {Component} from 'react';
import Modal_SignIn from './Modal_SignIn.js';

export class SignInTrigger extends Component {



  render() {
    return <button onClick={this.props.showModal} className="modal-button">
        {this.props.signInText} Sign In
    
      </button>

  }
}

export default SignInTrigger;