import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout.js';
import Categories from './Categories.js';
// import Order from './Order.js';
let missionStatement = 'Mystic Thai offers bold and authentic flavors of Thai food located in beautiful downtown Greenville.  Our talented, experienced chefs create authentic Thai entrees using fresh ingredients and traditional recipes.  Exotic sauces and flavors intermingle on your plate creating an exciting taste journey you can experience only in our restaurant.';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        Appetizers: [],
        Desserts: [],
        Entrees: [],
        Order: []

      },
      category: 'Appetizers',
      missionStatement: true,
      displayOrder: false,
      order: [],
      total: 0.00
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }


  // makes mission statement render on page load then sets state based on click event
  handleSelect(event) {
    if(event.target.value == "Order") {
      this.setState({displayOrder: true, missionStatement: false});
      console.log("order");
    } else {
      this.setState({ category: event.target.value, missionStatement: false, displayOrder: false });
      console.log("menu");
    };
  }

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then((result) => {
      result.json().then((response) => {
        this.setState({menuItems: response[0]});
      });
    });
  }

  handleOrder(event, orderItem) {
    event.preventDefault();
    let items = this.state.order;
    items.push(orderItem);
    this.setState({ order: items });
    this.state.total += this.properRound(orderItem.price);
    console.log('order', this.state.order);
    console.log('total', this.state.total);
  }

  submitOrder(event) {
    let object = {
      order: this.state.order,
      total: this.state.total
    }
    console.log("submit fired", this.state.order);



    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenuDoyle', {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((result) => {
      result.json();
    });
    this.setState({
      order: [],
      total: 0.00
    })
  }

  properRound = (amount) => {
    if (amount == undefined)
    {
        return Number((+0).toFixed(2));
    }
    else {
        return Number((Math.round(amount * 100) / 100).toFixed(2));
    }
  };

  render() {
    console.log(this.state.order);
    let categories = this.state.menuItems[this.state.category].map((category) => {
      return <Categories key={category.dish} category={category} handleOrder={ this.handleOrder }/>
    });
    let finalOrders = this.state.order.map((finalOrder, index) => {
      return (
        <div key={ index }>
          <h3>{finalOrder.dish}: <span className="right">{finalOrder.price}</span></h3>
        </div>
      )
    })
    let display = this.state.displayOrder ? finalOrders : categories

    return (
      <div className="App">
        <div className="item-display">
          <div className="display-buttons">
            <input className= "hover" value="Appetizers" type="button" onClick={this.handleSelect} />
            <input className= "hover" value="Entrees" type="button" onClick={this.handleSelect} />
            <input className= "hover" value="Desserts" type="button" onClick={this.handleSelect} />
            <button className= "hover" value="Order" type="button" onClick={this.handleSelect}>order: {this.state.order.length}</button>
          </div>
          <h1 className="mission-statement">{ this.state.missionStatement ? missionStatement : display }</h1>
          { this.state.displayOrder ?
            <div className="display-total">
              <hr/><span className="total">Total: { this.state.total.toFixed([2]) }</span><br/>
              <button className="btn total-button" onClick={this.submitOrder}>Place Order</button>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
