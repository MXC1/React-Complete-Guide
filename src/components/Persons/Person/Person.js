import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        < div onDoubleClick={props.click} className={classes.Person} >
            <h1>I am {props.name} and I am {props.age} years old</h1>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div >
    );
};

export default person;