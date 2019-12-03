import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import firebase, { auth, provider } from './firebase.js';
import RemoveButton from './RemoveButton'



export class ModalContent_Alerts extends Component {
  constructor(props) {
     super(props);
     this.state = {
 		
     };

   } 
  
  renderFavorites(value,index){
    
    return(
    <tr>
      <td>{value}</td>
      <td><RemoveButton name={value} /></td>
    </tr>
      )
  }

  render() {
    return ReactDOM.createPortal(

       <React.Fragment>
      <div className = "backdrop">
      </div>
        <div className="primary" > 
        <button className="close-button" onClick={this.props.closeModal}>
            close
          </button>
          <div className = "div-title">Alerts</div>
        <div className="secondary">
          
          <div>
          	- Bitcoin price has increased 1.2%
          	{console.log(this.props.currencyList)}
            {this.props.currencyList.map(this.renderFavorites)}
          </div>    
        </div>
        </div>
       </React.Fragment>,
      document.body
    );
  }
}
export default ModalContent_Alerts;