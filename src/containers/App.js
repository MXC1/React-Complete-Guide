import React, { Component } from "react";
import "./App.css";
import classes from './App.css'

import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/cockpit/cockpit'

class App extends Component {
  state = {
    persons: [
      { id: "abc", name: "Max", age: 28 },
      { id: "def", name: "Milo", age: 21 },
      { id: "ghi", name: "Chloe", age: 24 },
    ],
    showPersons: false
  };

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
          <Persons
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}>
          </Persons>
        </div>
      );

    }

    return (
      <div className="App">
        <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler}></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;