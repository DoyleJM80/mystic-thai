import React, { Component } from 'react';

export default class Appetizers extends Component {
  constructor() {
    super();
  }
  render() {
    let appetizer = this.props.appetizer;
    return(
      <div className="card">
        <h2>Dish: {appetizer.dish}</h2>
        <p>Description: {appetizer.description}</p>
        <h3>Price: {appetizer.price}</h3>
      </div>
    )
  }
}
