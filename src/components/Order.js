import React, { Component } from 'react';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        Appetizers: [],
        Entrees: [],
        Desserts: [],
        appetizers: {},
        entrees: {},
        desserts: {}
      }
    }
    this.handleOrder = this.handleOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleOrder(event) {

  };

  handleChange(event) {
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
  }

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then((result) => {
      result.json().then((response) => {
        this.setState({menuItems: response[0]});
      })
    })
  };

  render() {
    let appetizers = this.state.menuItems.Appetizers.map((appetizer, index) => {
      return <option value={appetizer.dish} key={index}>{appetizer.dish}</option>
    })
    let entrees = this.state.menuItems.Entrees.map((entree, index) => {
      return <option value={entree.dish} key={index}>{entree.dish}</option>
    })
    let desserts = this.state.menuItems.Desserts.map((dessert, index) => {
      return <option value={dessert.dish} key={index}>{dessert.dish}</option>
    })
    return(
      <div className="form-container">
        <form className="flex">
          <div>
            <select onChange={this.props.handleChange} name="appetizers">
              <option>Select an Appetizer</option>
              {appetizers}
            </select>
            <button onClick={this.props.handleOrder}>Add</button>
          </div>
          <div>
            <select onChange={this.props.handleChange} name="entrees">
              <option>Select an Entree</option>
              {entrees}
            </select>
            <button onClick={this.props.handleOrder}>Add</button>
          </div>
          <div>
            <select onChange={this.props.handleChange} name="desserts">
              <option>Select a Dessert</option>
              {desserts}
            </select>
            <button onClick={this.props.handleOrder}>Add</button>
          </div>
          <button className="submit-button">Submit Order</button>
        </form>
        <div className="your-order">
          <h1>Your Order</h1>
        </div>
      </div>
    );
  };
}
