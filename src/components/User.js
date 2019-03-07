import React from 'react';

const User = (props) => {
    return(
        <li>name: {props.children} | age: {props.age}
            <button onClick={props.delEvent}>Delete</button>
        </li>
        
    )
}
export default User;