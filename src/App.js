import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'def', name: 'Milo', age: 21 },
      { id: 'ghi', name: 'Chloe', age: 24 },
    ],
    showPersons: false
  };

  // switchNameHandler = () => {
  //   this.setState({
  //     persons: [
  //       { name: this.state.persons[2].name, age: this.state.persons[2].age },
  //       { name: this.state.persons[0].name, age: this.state.persons[0].age },
  //       { name: this.state.persons[1].name, age: this.state.persons[1].age },
  //     ]
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];

    persons.find(p => p.id === id).name = event.target.value;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((p, index) => {
              return <Person
                key={p.id}
                name={p.name}
                age={p.age}
                changed={(event) => this.nameChangedHandler(event, p.id)}
                click={() => this.deletePersonHandler(index)} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <br></br>
        <button onClick={this.togglePersonsHandler}>Change Places</button>
        {persons}
      </div>
    );
  }
}
export default App;