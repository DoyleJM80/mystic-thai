import React, { Component } from 'react';

export default class Appetizers extends Component {
  constructor() {
    super();
  }
  render() {
    let appetizer = this.props.appetizer;
    return(
      <div>
        <h3>dish: {appetizer.dish}</h3>
      </div>
    )
  }
}
