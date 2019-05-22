import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Name1', age: 1 },
      { name: 'Name2', age: 2 },
      { name: 'Name3', age: 3 }
    ]
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T CHANGE STATE LIKE THIS: personsState.persons[0].name = 'DifferentName';
    setPersonsState({
      persons: [
        { name: 'Name1A', age: 1 },
        { name: 'Name2', age: 2 },
        { name: 'Name3', age: 4 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, "Hi, I'm a React App!!!")
  // );
};

export default App;
