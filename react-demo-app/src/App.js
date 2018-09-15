import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Cesar',
    age: 21
  }

  handleClick = (e) => {
    this.setState({
      name: 'Cesar Garcia'
    });
  }

  handleMouseOver = (e) => {
    console.log(e.target, e.pageX);
  }

  handleCopy = (e) => {
    console.log('Be original!!')
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React. </h1>
          <p>My name is {this.state.name} and my age is {this.state.age}</p>
        </header>
        <section>
          <button onClick={this.handleClick}>Click Me!</button>
          <button onMouseOver={this.handleMouseOver}>Hover me</button>
          <p onCopy={this.handleCopy}>What we think, we become.</p>
        </section>
      </div>
    );
  }
}

export default App;
