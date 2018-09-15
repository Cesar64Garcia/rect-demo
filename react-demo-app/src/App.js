import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Cesar',
    age: 21
  }

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React. </h1>
          <p>My name is {this.state.name} and my age is {this.state.age}</p>
        </header>
        <section>
          <form action=""  onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleInputChange}/>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
