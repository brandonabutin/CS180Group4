import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { BrowserRouter, Route, Link } from "react-router-dom";

var cryptocurrencyobjectlist = [] ;

class ListButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent:false,
      sorting_ascending:false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
        showComponent:true,
        sorting_ascending:!this.state.sorting_ascending,
    });
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    if(this.state.sorting_ascending){
      return (
        <div>
         <Button onClick={this._onButtonClick}>Ascending</Button>
         <Displaylist sortingprop="ascending" />
        </div>
      );
    }
    else{
      return (
        <div>
          <Button onClick={this._onButtonClick}>Descending</Button>
          <Displaylist sortingprop="descending" />
        </div>
      );
    }
  }
}


class Displaylist extends Component{
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      sorting: props.sortingprop,
    }
  }

  renderCurrency(currency,index){
    //console.log(currency.raw_data)
    //console.log(currency.display_data)
    return(
    <tr key={index} >
     <td><Link to= {{pathname:"/cryptocurrency",
        state:{currencyname:currency.name,
        currency_raw_data: currency.raw_data,
        currecy_display_data: currency.display_data,
        imageurl:currency.imgurl,
     }}}>{currency.name}</Link></td>
      <td>${currency.priceUSD}</td>
    </tr>   
      )
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=40&tsym=USD')
      .then(res => {
        const cryptos = res.data['Data'];
        this.setState({listings: cryptos});
      })
  }
  render(){
    cryptocurrencyobjectlist = [] 
    for(let value in this.state.listings){
       var cryptoObject= {};
       cryptoObject['name'] = this.state.listings[value].CoinInfo.FullName;
       cryptoObject['priceUSD'] = this.state.listings[value].RAW.USD.PRICE;
       cryptoObject['display_data'] = this.state.listings[value].DISPLAY.USD;
       cryptoObject['raw_data']= this.state.listings[value].RAW.USD;
       cryptoObject['imgurl'] = this.state.listings[value].DISPLAY.USD.IMAGEURL;
       cryptocurrencyobjectlist.push(cryptoObject)
    }
    console.log(cryptocurrencyobjectlist)
    if(this.state.sorting === "ascending"){
      cryptocurrencyobjectlist.sort((a, b) => (a.priceUSD < b.priceUSD) ? -1 : 1)
      this.state.sorting = "descending"
    }else if(this.state.sorting === "descending"){
      cryptocurrencyobjectlist.sort((a, b) => (a.priceUSD < b.priceUSD) ? 1 : -1)
      this.state.sorting = "ascending"
    }
    //specify routes and links
    return(
    <Table striped condensed hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>PriceUSD</th>
    </tr>
    </thead>
    <tbody>
       {cryptocurrencyobjectlist.map(this.renderCurrency)}
    </tbody>
    </Table>
    );  
  }
}

export default ListButton;