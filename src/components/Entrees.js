import React, { Component } from 'react';

export default class Entrees extends Component {
  constructor()  {
    super();
  };
  render() {
    let entree = this.props.entree;
    return(
      <div className="card">
        <h2>Dish: {entree.dish}</h2>
        <p>Description: {entree.description}</p>
        <h3>Price: {entree.price}</h3>
      </div>
    )
  };
}
