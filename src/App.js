import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Name1', age: 1 },
      { name: 'Name2', age: 2 },
      { name: 'Name3', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // const [otherState, setOtherState] = useState({
  //   otherState: 'some other value'
  // });

  // console.log(personsState);

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T CHANGE STATE LIKE THIS: personsState.persons[0].name = 'DifferentName';
    this.setState({
      persons: [
        { name: newName, age: 1 },
        { name: 'Name2', age: 2 },
        { name: 'Name3', age: 4 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Name1', age: 1 },
        { name: event.target.value, age: 2 },
        { name: 'Name3', age: 3 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'NewClickName')}
            changed={this.nameChangedHandler}
          >
            My hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch name
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
