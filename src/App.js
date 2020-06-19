import React, { Component } from "react";
import "./App.css";
import styled from 'styled-components';

import Person from "./Person/Person";

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
`

class App extends Component {
  state = {
    persons: [
      { id: "abc", name: "Max", age: 28 },
      { id: "def", name: "Milo", age: 21 },
      { id: "ghi", name: "Chloe", age: 24 },
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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

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

      style.backgroundColor = "red";
    }

    const classes = [];
    // let classes = ["red", "bold"].join(" ");
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <br></br>
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle People</StyledButton> */}
          <button className="button"  onClick={this.togglePersonsHandler}>Change Places</button>
          {persons}
        </div>
    );
  }
}

export default App;