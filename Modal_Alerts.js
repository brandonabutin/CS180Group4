import React, {Component} from 'react';
import ModalContent_Alerts from './ModalContent_Alerts.js';
import firebase, { auth, provider } from './firebase.js';
import Dropdown from 'react-bootstrap/Dropdown';



export class Modal_Alerts extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      pastPrice : [],
      currentPrice : [],
      coinNames : [],
      sendArray : [],
      init: true,
      flag1 : 0,
      flag2 : 0
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
    firebase.database().ref(update_key + '/favorites_price').once('value', 
       (snapshot)=>{
            data_read = snapshot.val();    
             this.setState({
            pastPrice:data_read,
            flag1: 1
        });
        console.log("this will set past price" + data_read);
       
       } 
    );
  }
  //create an array of current prices
  firebase.database().ref(update_key + '/favorites_symbol').once('value', 
           (snapshot)=>{
                
                data_read = snapshot.val(); 
                var data_to_send = ["TEST"];  
                this.setState({
                  coinNames: data_read
                });  
                for(var i=1;i<data_read.length;i++){ //starts at 1 becuase of test val REMEMBER TO CHANGE THIS LATER OR IT WILL CRASH
                  fetch('https://min-api.cryptocompare.com/data/price?fsym='+data_read[i]+'&tsyms=USD').then(response => {
                     return response.json();
                      }).then(result => {
                      data_to_send.push(result.USD); 
                      console.log("This will set currentPrice" + data_to_send);
                      this.setState({
                        currentPrice:data_to_send,
                        flag2: 1
                      });
                      
                  });
                } 
              }
            
        );
    console.log(this.state.pastPrice);
    console.log(this.state.currentPrice);
    console.log(this.state.coinNames);
    var placehold = []
    var toAdd;
    for (var j=0;j<this.state.pastPrice.length;j++){
      var toAdd = this.state.coinNames[j] + " Last Seen: " +this.state.pastPrice[j]+ " Current Price: " + this.state.currentPrice[j] + "\ has changed by the following multiplier " + (this.state.currentPrice[j]/this.state.pastPrice[j]);
      placehold.push(toAdd);
    }
    if(this.state.flag1 == 1 && this.state.flag2 == 1){
    this.setState({ isShown: true, init:false, sendArray: placehold});
    console.log(this.state.isShown);
  }
  };

closeModal = () => {
   this.setState({ isShown: false });
   console.log(this.state.isShown);
 };


  render() {
    return (

    <React.Fragment>
        {this.state.init?<p onClick={this.showModal} style={{color:'red'}}>Alert</p>:<p onClick={this.showModal}>Alert</p>}
        {this.state.isShown?<ModalContent_Alerts closeModal={this.closeModal} sendarray = {this.state.sendArray} coinnames={this.state.coinNames} />:<React.Fragment/>}
      </React.Fragment>
  	)
  }
}

export default Modal_Alerts;
