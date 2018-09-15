import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    name: 'Cesar',
    age: 21
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas name="Cesar" age="25" belt="white"/>
      </div>
    );
  }
}

export default App;
