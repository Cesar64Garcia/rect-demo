import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Cesar', age: 21, belt: 'black', id: 1},
      {name: 'Javier', age: 22, belt: 'white', id: 2},
      {name: 'Joshy', age: 23, belt: 'green', id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
