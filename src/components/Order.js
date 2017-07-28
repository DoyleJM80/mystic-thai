import React, { Component } from 'react';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        Appetizers: [],
        Entrees: [],
        Desserts: []
      }
    }
  };

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then((result) => {
      result.json().then((response) => {
        this.setState({menuItems: response[0]});
      })
    })
  };

  render() {
    return(
      <div className="form-container">
        <form>
          <select>
            <option>Select an Appetizer</option>
          </select>
          <button>Add</button>
          <select>
            <option>Select an Entree</option>
          </select>
          <button>Add</button>
          <select>
            <option>Select a Dessert</option>
          </select>
          <button>Add</button>
          <button>Submit Order</button>
        </form>
      </div>
    );
  };
}
