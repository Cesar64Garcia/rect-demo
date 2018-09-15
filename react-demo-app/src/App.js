import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: []
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })

    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h2>This are our Nijas:</h2>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <br/>
        <h2>Add a new ninja:</h2>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
