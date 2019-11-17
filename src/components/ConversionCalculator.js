import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NumericInput from 'react-numeric-input';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//const {ButtonToolbar, Dropdown, MenuItem}
var cryptocurrencyobjectlist = [] ;

class ConversionCalculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listings: [],
    }
  }
  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=40&tsym=USD')
      .then(res => {
        const cryptos = res.data['Data'];
        this.setState({listings: cryptos});
      })
  }
  render(){
    createSelectItem() {
      //let cryptocurrencyobjectlist = [];
        for(let value in this.state.listings){
           var cryptoObject= {};
           cryptoObject['name'] = this.state.listings[value].CoinInfo.FullName;
           cryptoObject['priceUSD'] = this.state.listings[value].RAW.USD.PRICE;
           cryptocurrencyobjectlist.push(cryptoObject)
         }
         return cryptocurrencyobjectlist;
       };

       onDropdownSelected(e) {
       console.log("THE VAL", e.target.value);
       }
       //console.log(this.state.listings[0]['CoinInfo']);


    return(
      <div>
      <Container>
      <Row>
          <Dropdown>
              /*createSelectItems() {
               let items = [];
               for (let i = 0; i <= this.props.maxValue; i++) {
                    items.push(<option key={i} value={i}>{i}</option>);
                    //here I will be creating my options dynamically based on
                    //what props are currently passed to the parent component
               }
               return items;
              }
              onDropdownSelected(e) {
              console.log("THE VAL", e.target.value);
            }*/

              <Dropdown.Toggle variant="success" id="dropdown-basic">Currency</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2"></Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
            {" "}
            <NumericInput min={0} max={10000} value={50}
            style={{
            input: {
              color: 'red'
            }}}
            />
            {" "}
          <span> to </span>

            {" "}
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Currency
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
  </Row>
  </Container>
  </div>

  );//return
  }
}
export default ConversionCalculator;
