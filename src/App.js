import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
const [ personsState, setPersonState ]= useState ({
  persons:[
    {name:"Ashu", age:25},
    {name:"Reyaan", age:3},
    {name:"Max", age:30}
  ]
  });

  const [OtherStates, setOtherStates]= useState('no more value');

  console.log(personsState, OtherStates);

   const switchNameHandler = () => {
    setPersonState ({
        persons:[
          {name:"Astha", age:25},
          {name:"Reyaan", age:3},
          {name:"Max", age:50}
        ]
      });
    };
  
  return (
   <div className="App">
   <h1> Hi, I am React App</h1>
   <p> Working</p>
   <button onClick={switchNameHandler}>Switch Name</button>
   <Person name= {personsState.persons[0].name} age={personsState.persons[0].age}/>
   <Person name= {personsState.persons[1].name}  age={personsState.persons[1].age}> My Hobbies: TV </Person>
   <Person name= {personsState.persons[2].name} age={personsState.persons[2].age}/>
   </div>
   );
  
//return React.createElement('div', {className:'App'}, React.createElement('h1','null','does it works'))
}



export default App;
