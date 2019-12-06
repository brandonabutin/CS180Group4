import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import RemoveButton from './RemoveButton'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export class ModalContent_Favorites extends Component {
  constructor(props) {
     super(props);
     this.state = {

     };

   }

  renderFavorites(value,index){

    return(
    <tr>
      <td>{value}</td>
      <td className = "mr-auto"><RemoveButton Name={value} /></td>
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
            Favorites
          </span>
            <Button variant="link" style={{float: 'right'}} onClick={this.props.closeModal} >
              <i class="fas fa-times"></i>
            </Button>
          </Card.Header>

          <Card.Body>
            {this.props.currencyList.map(this.renderFavorites)}
          </Card.Body>
          </Card>
        </div>
       </React.Fragment>,
      document.body
    );
  }
}
export default ModalContent_Favorites;
