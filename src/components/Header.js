
import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className='jumbotron fixed-top'>
        <span>logo</span>
        <a href='#'>Home</a>
        <a href='#'>Appetizers</a>
        <a href='#'>Entrees</a>
        <a href='#'>Desserts</a>
      </nav>
    );
  }
}
