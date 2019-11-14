import React, {Component} from 'react';


class Cryptocurrency extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currencyname:'',
            display_data:{} ,
            raw_data :{} ,
            imageurl:'',
        }
    }
    componentDidMount(){
        const currencynameparam = this.props.location.state.currencyname;
        const display_data = this.props.location.state.currecy_display_data;
        const raw_data = this.props.location.state.currency_raw_data;
        const imageurlparam = this.props.location.state.imageurl;
    
        console.log(imageurlparam)
        //console.log(raw_data)
        this.setState({
            currencyname:currencynameparam,
            display_data:display_data,
            raw_data:raw_data,
            imageurl:imageurlparam,
        });
    }
    render() {
        console.log(this.state.raw_data)
        console.log("www.cryptocompare.com"+ this.state.imageurl)
        return(
         <div>
         <h1>{this.state.currencyname}</h1>
            <div id="Price Changes">
            <h3><span>24hr change:</span><span>{this.state.display_data['CHANGE24HOUR']}</span></h3>
            <h3><span>1hr change:  </span><span>{this.state.display_data['CHANGEHOUR']}</span></h3>
            <h3><span>Daily low: </span><span><span>{this.state.display_data['LOWDAY']}</span></span></h3>
            <h3><span>Daily High:</span><span>{this.state.display_data['HIGHDAY']}</span></h3>
            <h3><span>Current Price:</span><span>${this.state.raw_data['PRICE']}</span></h3>
            <h3><span>24 Hour Percent change</span><span>{this.state.display_data['CHANGEPCT24HOUR']}</span></h3>
            <h3><span>1 hour Percent change:</span><span>{this.state.display_data['CHANGEPCTHOUR']}</span></h3>
            <h3><span>Symbol:</span><span>{this.state.display_data['FROMSYMBOL']}</span></h3>
            <img src = {"https://www.cryptocompare.com"+ this.state.imageurl}/>
            </div>
         </div>
        );
    }
}
export default Cryptocurrency;