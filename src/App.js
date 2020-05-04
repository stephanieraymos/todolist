import React, { Component } from 'react';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: true
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  }

  markComplete = () => {
console.log('From app.js')
  }

  render() {
    return (
      //JSX, Javascript can be used in JSX with {curly braces}
      <div className="App">
        <Todos todos= {this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}


export default App;


// import React, { Component } from 'react';
// class App extends Component 

// is the same as:

// import React from 'react';
// class App extends React.Component