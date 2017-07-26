import React, { Component } from 'react';

export default class Dessert extends Component {
  constructor() {
    super();
  };
  render() {
    let dessert = this.props.dessert;
    return(
      <div className="card">
        <h2>Dish: {dessert.dish}</h2>
        <p>Description: {dessert.description}</p>
        <h3>Price: {dessert.price}</h3>
      </div>
    );
  };
}
