import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'Name1', age: 1 },
      { id: 'id2', name: 'Name2', age: 2 },
      { id: 'id3', name: 'Name3', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // const [otherState, setOtherState] = useState({
  //   otherState: 'some other value'
  // });

  // console.log(personsState);

  nameChangedHandler = (event, index) => {
    // Get the person
    const person = { ...this.state.persons[index] };
    // Alternative: const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    // const newPersons = this.state.persons;
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // console.log('PERSONS', person, index);
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler}
                changed={event => this.nameChangedHandler(event, index)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }

  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, "Hi, I'm a React App!!!")
  // );
}

export default App;

// <Person
//   name={this.state.persons[0].name}
//   age={this.state.persons[0].age}
// />
//   <Person
//     name={this.state.persons[1].name}
//     age={this.state.persons[1].age}
//     click={this.switchNameHandler.bind(this, 'NewClickName')}
//     changed={this.nameChangedHandler}
//   >
//     My hobbies: Racing
//           </Person>
//   <Person
//     name={this.state.persons[2].name}
//     age={this.state.persons[2].age}
//   />

// switchNameHandler = newName => {
// console.log('Was clicked!');
// DON'T CHANGE STATE LIKE THIS: personsState.persons[0].name = 'DifferentName';
//   this.setState({
//     persons: [
//       { name: newName, age: 1 },
//       { name: 'Name2', age: 2 },
//       { name: 'Name3', age: 4 }
//     ]
//   });
// };
