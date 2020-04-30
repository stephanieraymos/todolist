import React from 'react';
import Todos from './Components/Todos';
import './App.css';

function App() {
  return (
    //JSX, Javascript can be used in JSX with {curly braces}
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// class App extends Component 

// is the same as:

// import React from 'react';
// class App extends React.Component