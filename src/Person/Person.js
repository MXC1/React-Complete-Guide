import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div onDoubleClick={props.click} className="person">
            <h1>I am {props.name} and I am {props.age} years old</h1>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
};

export default person;