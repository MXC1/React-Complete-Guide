import Person from "./Person/Person";
import React from 'react';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)}
        click={() => props.clicked(index)} />
})

export default persons;