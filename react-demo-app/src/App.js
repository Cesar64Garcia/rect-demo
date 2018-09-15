import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Cesar',
    age: 21
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React. </h1>
          <p>My name is {this.state.name} and my age is {this.state.age}</p>
        </header>
      </div>
    );
  }
}

export default App;
