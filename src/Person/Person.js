import React from 'react';

const person = (props) => {
    return (
        <div className = "Person">
            <p onClick = {props.click}>I'm a {props.name}.My age is {props.age}</p>
        </div>
    )
};
export default person;
