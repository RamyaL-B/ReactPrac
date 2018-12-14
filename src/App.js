import React, { Component } from 'react';
// import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephenie", age: 26},
      {name: "Crishtopher", age: 30}
    ]
    
  }

  switchHandlerName =() => {
    this.setState({
      persons:[
        {name: "Maxmillian", age: 28 },
        {name: "Manu", age: 29},
        {name: "Stephenie", age: 26},
        {name: "Crishtopher", age: 40}
      ]
    })
  }
  render() {
    return (
      <div className='App'>
       <h1>Hi, I am react app</h1>
       <p>This is really working!!!</p> 
       <button onClick = {this.switchHandlerName}>Switch Name</button> 
       <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
       <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
       <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
       <Person name = {this.state.persons[3].name} age = {this.state.persons[3].age}/>
       
      </div>
    );
  }
}

export default App;
