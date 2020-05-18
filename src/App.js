import React, { Component } from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import './App.css';
import Header from './Components/layout/Header'
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

  // Toggle Complete
  markComplete = (id) => {
this.setState({ todos: this.state.todos.map(todo => {
  if (todo.id === id) {
      todo.completed = !todo.completed
  }
  return todo;
}) }); 
 }

 // Delete Todo
 delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]});
 }

 //Add Todo
 addTodo = (title) => {
   const newTodo={
     id: 4,
     title,
     completed: false
   }
  this.setState({ todos: [...this.state.todos, newTodo] });
 }

  render() {
    return (
      //JSX, Javascript can be used in JSX with {curly braces}
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos 
          todos= {this.state.todos} 
          markComplete={this.markComplete} 
          delTodo={this.delTodo} />
        </div>
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