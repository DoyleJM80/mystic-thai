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
        Entrees: []
      },
      category: 'Appetizers',
      missionStatement: true,
      order: [],
      total: 0.00
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }


  // makes mission statement render on page load then sets state based on click event
  handleSelect(event) {
    this.setState({ category: event.target.value, missionStatement: false })
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
    let categories = this.state.menuItems[this.state.category].map((category) => {
      return <Categories key={category.dish} category={category} handleOrder={ this.handleOrder }/>
    });

    return (
      <div className="App">
        <div className="item-display">
          <div className="display-buttons">
            <input className= "hover" value="Appetizers" type="button" onClick={this.handleSelect} />
            <input className= "hover" value="Entrees" type="button" onClick={this.handleSelect} />
            <input className= "hover" value="Desserts" type="button" onClick={this.handleSelect} />
            <input className= "hover" value={`Order: ${this.state.order.length}`} type="button" />
          </div>
          <h1 className="mission-statement">{ this.state.missionStatement ? missionStatement : categories }</h1>
        </div>
      </div>
    );
  }
}

export default App;
