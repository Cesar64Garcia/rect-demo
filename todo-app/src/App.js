import React, { Component } from 'react';
import ToDos from './ToDos'
import AddToDo from './AddForm'

class App extends Component {
  state = {
    toDos:[
      {id: 1, content: 'buy some milk.'},
      {id: 2, content: 'learn react js.'}
    ]
  }

  addToDo = (toDo) => {
    toDo.id = Math.random()
    let toDos = [...this.state.toDos, toDo]
    this.setState({
      toDos
    })
  }

  deleteToDo = (id) => {
    let toDos = this.state.toDos.filter(toDo => {
      return toDo.id !== id;
    })

    this.setState({
      toDos
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">To Do's</h1>
        <ToDos toDos={this.state.toDos} deleteToDo={this.deleteToDo}/>
        <br/>
        <AddToDo addToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;
