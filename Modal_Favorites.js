import React, {Component} from 'react';
import ModalContent_Favorites from './ModalContent_Favorites.js';
import firebase, { auth, provider } from './firebase.js';
import Dropdown from 'react-bootstrap/Dropdown';



export class Modal_Favorites extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      currencyList : []
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
    firebase.database().ref(update_key + '/favorites').once('value',
       (snapshot)=>{
            data_read = snapshot.val();
             this.setState({
	      		currencyList:data_read
    		});
       }
    );
	}
    this.setState({ isShown: true});
    console.log(this.state.isShown);
  };

closeModal = () => {
   this.setState({ isShown: false });
   console.log(this.state.isShown);
 };


  render() {
    return (

    <React.Fragment>
        <p onClick={this.showModal} >Favorites</p>
        {this.state.isShown?<ModalContent_Favorites closeModal={this.closeModal} currencyList={this.state.currencyList} />:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal_Favorites;
