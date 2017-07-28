
import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className='banner fixed-top'>
        <div className="img-container"></div>
        <a className="place-order" href='#'>Place Order</a>
      </nav>
    );
  }
}
