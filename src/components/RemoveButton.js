import React from 'react';
//import {MdStars} from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { Icon } from '@material-ui/core';
import firebase, { auth, provider } from './firebase.js';

class RemoveButton extends React.Component{
    constructor(props){
        super(props);
        this.state ={         
            Name:'',   //stores name of coin to be removed from favorites               
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }


_onButtonClick() {
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
             
            //necessary data is read
            for(var i=data_read.length-1;i>0; i--){
                console.log("I'm stuck");
                console.log(data_read[i] + " and " + this.props.Name);
                if(data_read[i] == this.props.Name){
                   console.log("inside");
                    //firebase.database().ref(update_key + '/favorites').child(i).remove();
                    data_read.splice(i,1);
                    
                    console.log('something has been updated');
                    console.log(update_key);
                    break;
                
                }else{
                   console.log("Not found")
                  return null;   
                }
            }
            console.log("This will be pushed" + data_read);
            updates[update_key + '/favorites'] = data_read;
            //firebase.database().ref().update(updates);
            //list is spliced, time to update
            
       } 
    );
    }
}

componentDidMount(){
        this.setState({
            Name: this.props.Name,
        });
    }


render(){
    
    return(
        <React.Fragment>
        
            <button onClick={this._onButtonClick()} >Remove</button>
            {console.log("remove rendered")}
            </React.Fragment>

        );

    }

}
export default RemoveButton;