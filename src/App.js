import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Milo', age: 21 },
      { name: 'Chloe', age: 24 },
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Chloe', age: 28 },
        { name: 'Max', age: 21 },
        { name: 'Milo', age: 24 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <button onClick={this.switchNameHandler}>Change Places</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
