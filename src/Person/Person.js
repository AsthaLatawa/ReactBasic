import React from 'react';

const person= (props) => {
  
    return(
        <div>
        <p onClick={props.click}> I am a {props.name } and I am {props.age} years old</p>
        <p>{props.children}</p>
       // <input type ="text" onChange={props.Changed} value={props.name}> </input>
        </div>


    ) 
    

};

export default person;

