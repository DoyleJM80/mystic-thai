import React, { Component } from 'react';

export default class Categories extends Component {
  constructor() {
    super();
    this.state ={
      order: [],
      total: 0.00
    }
    this.properRound = this.properRound.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }


  //Rounds decimal numbers to 2 indexes after decimal
  properRound = (amount) => {
    if (amount == undefined)
    {
        return Number((+0).toFixed(2));
    }
    else {
        return Number((Math.round(amount * 100) / 100).toFixed(2));
    }
  };


  // pushes item ordered into array and sets state
  handleOrder = (event, orderItem) => {
    event.preventDefault();
    let items = this.state.order;
    items.push(orderItem);
    this.setState({ order: items });
    this.state.total += this.properRound(orderItem.price);
    console.log('items', items);
    console.log('total', this.state.total);
  }

  render() {
    let category = this.props.category;
    return(
      <div>
        <div className="item">
          <h2>{category.dish}</h2>
          <p>{category.description}</p>
          <h3>Price: {category.price}</h3>
          <button className="order-button hover btn" onClick={(event) => this.props.handleOrder(event, category)}>Add to Order</button>
          <hr />
        </div>
      </div>

    )
  }
}
