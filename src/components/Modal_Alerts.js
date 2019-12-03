import React, {Component} from 'react';
import ModalContent_Alerts from './ModalContent_Alerts.js';
import firebase, { auth, provider } from './firebase.js';



export class Modal_Alerts extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      currencyList : [],
      init: true
    };
  }

showModal = () => {
	var user_login = firebase.auth().currentUser;
    console.log(user_login.email);
    if(user_login != null){
	 var updates = {};
    var split1 = user_login.email.split('@');
    var split2 = split1[1].split('.')
    var update_key = split1[0].concat(split2[0]);
    var data_read;
    //read exsiting first, push to favorites list and update
   // firebase.database().ref().update(false);
	}
    this.setState({ isShown: true, init:false});
    console.log(this.state.isShown);
  };

closeModal = () => {
   this.setState({ isShown: false });
   console.log(this.state.isShown);
 };


  render() {
    return (

    <React.Fragment>
        {this.state.init?<button onClick={this.showModal} style={{color:'red'}} >Alert</button>:<button onClick={this.showModal}>Alert</button>}
        {this.state.isShown?<ModalContent_Alerts closeModal={this.closeModal} currencyList={this.state.currencyList} />:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal_Alerts;
