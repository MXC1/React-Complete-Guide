import React, { Component, useState } from 'react';
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
        { name: this.state.persons[2].name, age: this.state.persons[2].age },
        { name: this.state.persons[0].name, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
      ]
    });
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
        { name: this.state.persons[2].name, age: this.state.persons[2].age },
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
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler} />
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

// =======================================
// The same code as a functional component
// =======================================

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Milo', age: 21 },
//       { name: 'Chloe', age: 24 },
//     ]
//   })

//   const switchNameHandler = () => {
//       setPersonsState({
//         persons: [
//           { name: 'Chloe', age: 28 },
//           { name: 'Max', age: 21 },
//           { name: 'Milo', age: 24 },
//         ]
//       });
//   }

//     return (
//       <div className="App">
//         <br></br>
//         <button onClick={switchNameHandler}>Change Places</button>
//         <Person
//           name={personsState.persons[0].name}
//           age={personsState.persons[0].age} />
//         <Person
//           name={personsState.persons[1].name}
//           age={personsState.persons[1].age}
//           click={this.switchNameHandler} />
//         <Person
//           name={personsState.persons[2].name}
//           age={personsState.persons[2].age} />
//       </div>
//     );
// }

// export default app;
