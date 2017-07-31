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

  properRound = (amount) => {
    if (amount == undefined)
    {
        return Number((+0).toFixed(2));
    }
    else {
        return Number((Math.round(amount * 100) / 100).toFixed(2));
    }
  };

  handleOrder = (event, orderItem) => {
    this.state.order.push(orderItem);
    this.state.total += this.properRound(orderItem.price);
    this.setState({order: this.state.order, total: Number(this.state.total.toFixed(2))});
    console.log('length', this.state.order.length);
    console.log('item', orderItem.dish);
    console.log('price', this.state.total);
  }

  render() {
    let category = this.props.category;
    return(
      <div>
        <div className="item">
          <h2>{category.dish}</h2>
          <p>{category.description}</p>
          <h3>Price: {category.price}</h3>
          <button onClick={(event) => this.handleOrder(event, category)}>Add to Order</button>
          <hr />
        </div>
        <div>
          <h1>{this.state.order.dish}</h1>
          <h1>{this.state.total}</h1>
        </div>
      </div>

    )
  }
}
