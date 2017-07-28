import React, { Component } from 'react';

export default class Categories extends Component {
  constructor() {
    super();
  }
  render() {
    let category = this.props.category;
    return(
      <div className="item">
        <h2>{category.dish}</h2>
        <p>{category.description}</p>
        <h3>Price: {category.price}</h3>
        <hr />
      </div>
    )
  }
}
