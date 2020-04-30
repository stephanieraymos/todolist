import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//This is grabbing that important "root" div from index.html and inserting the app component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


