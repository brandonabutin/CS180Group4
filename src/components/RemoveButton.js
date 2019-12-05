import React from 'react';
//import {MdStars} from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { Icon } from '@material-ui/core';
import firebase, { auth, provider } from './firebase.js';

class RemoveButton extends React.Component{
	constructor(props){
        super(props);
        this.state ={
            name:'',   //stores name of coin to be removed from favorites
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
            	if(data_read[i] == this.props.name){
                   console.log(data_read[i] + " and " + this.props.name)
            		console.log("I'm stuck");
            		data_read.splice(i,1);
            	}
            }
            //list is spliced, time to update
            updates[update_key + '/favorites'] = data_read;
                firebase.database().ref().update(updates);
                console.log('something has been updated');
                console.log(update_key);
       }
    );
	}
}

componentDidMount(){
        this.setState({
            name: this.props.name,
        });
    }


render(){

	return(
		<React.Fragment>

				<Button className = "ml-auto" variant="link" onClick={this._onButtonClick()} >
					<i class="fas fa-minus"></i>
				</Button>
			{console.log("remove rendered")}
			</React.Fragment>

		);

	}

}
export default RemoveButton;
