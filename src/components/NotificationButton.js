import React from 'react';
//import {MdStars} from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { Icon } from '@material-ui/core';
import firebase, { auth, provider } from './firebase.js';


class NotificationButton extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            NotificationsOn: false,
            Name:'',
            CoinSymbol:'',
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    


    _onButtonClick() {
        //this should send to database with on click
        //Create a favorites page and get data from it
       /*firebase.database().ref().set({
            testval: 'new'
        })*/  
      var user_login = firebase.auth().currentUser;
      console.log(user_login.email);
      if(user_login != null){
        //create key
        var updates = {};
        var split1 = user_login.email.split('@');
        var split2 = split1[1].split('.')
        var update_key = split1[0].concat(split2[0]);
        var data_read;
        //read exsiting first, push to favorites list and update
        firebase.database().ref(update_key + '/favorites').once('value', 
           (snapshot)=>{
                data_read = snapshot.val();    
                data_read.push(this.props.Name);
                updates[update_key + '/favorites'] = data_read;
                firebase.database().ref().update(updates);
                console.log('something has been updated');
                console.log(update_key);
           } 
        );
        firebase.database().ref(update_key + '/favorites_symbol').once('value', 
           (snapshot)=>{
                updates = {};
                data_read = snapshot.val();    
                data_read.push(this.props.urlsymbol);
                updates[update_key + '/favorites_symbol'] = data_read;
                console.log(updates);
                console.log(typeof this.props.CoinSymbol)
                firebase.database().ref().update(updates);
                console.log('something has been updated');
                console.log(update_key);
           } 
        );
        //console.log(data_read);
        //write
       
       }
    }

    componentDidMount(){
        this.setState({
            Name: this.props.Name,
            CoinSymbol:this.props.urlsymbol,
        });
    }
    render(){
        console.log(this.state.Name);
        console.log(this.state.CoinSymbol);
    return(
            <div>
              <Button onClick = {this._onButtonClick}>Favorite</Button>
             </div>
        );
    }
}

export default NotificationButton;