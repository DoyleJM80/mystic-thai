import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout.js';
import Appetizers from './Appetizers.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        Appetizers: [],
        Desserts: [],
        Entrees: []
      }
    };
  }

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then((result) => {
      result.json().then((response) => {
        this.setState({menuItems: response[0]});
        console.log('log1', this.state.menuItems);
      });
    });
  }

  render() {
    console.log('log2', this.state.menuItems);
    let appetizers = this.state.menuItems.Appetizers.map((appetizer) => {
      return <Appetizers key={appetizer.dish} appetizer={appetizer}/>
    })
    return (
      <div className="App">

        <BaseLayout>
        </BaseLayout>
        {appetizers}


      </div>
    );
  }
}

export default App;
