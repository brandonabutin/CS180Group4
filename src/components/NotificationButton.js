import React from 'react';
import {MdStars} from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { Icon } from '@material-ui/core';

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
              <Button onClick = {this._onButtonClick}><MdStars/>Favorite</Button>
             </div>
        );
    }
}

export default NotificationButton;