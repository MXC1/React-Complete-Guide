import React from 'react';
import classes from './cockpit.css';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = [];

    if (props.showPersons) {
        assignedClasses.push(classes.Red)
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return <button
        className={assignedClasses.join(" ")}
        onClick={props.clicked}>
        Change Places
    </button>
};

export default Cockpit;