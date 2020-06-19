import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px solid #ccc;
padding: 16px;
text-align: center;

@media(min-width: 1000px): {
    width: '450px'
}
`;

const person = (props) => {
    const style = {
        '@media(min-width: 1000px)': {
            width: '450px'
        }
    }

    return (
        <StyledDiv onDoubleClick = { props.click }>
        {/* < div onDoubleClick = { props.click } className = "person" style = { style } > */}
            <h1>I am {props.name} and I am {props.age} years old</h1>
            <input type="text" onChange={props.changed} value={props.name}></input>
        {/* </div > */}
        </StyledDiv>
    );
};

export default person;