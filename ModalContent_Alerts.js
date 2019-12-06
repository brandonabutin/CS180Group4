import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



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
      <br/>
    </tr>
      )
  }

  render() {
    return ReactDOM.createPortal(
       
       <React.Fragment>
      <div className = "backdrop">
      </div>
        <div className="mx-auto float" >
        <Card className="mx-auto" border="primary" style={{
            width: '35rem'
          }}>
          <Card.Header className ="pt-3">
            <span style={{
                fontWeight: "bold",
                fontSize: 25
              }}>
            Price Alerts
          </span>
            <Button variant="link" style={{float: 'right'}} onClick={this.props.closeModal} >
              <i class="fas fa-times"></i>
            </Button>
          </Card.Header>

          <Card.Body>
            {this.props.sendarray.map(this.renderFavorites)}
          </Card.Body>
          </Card>
        </div>
       </React.Fragment>,
      document.body
    );
  }
}
export default ModalContent_Alerts;
