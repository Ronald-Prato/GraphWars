import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Screens/Home/Home';
import { Lists } from './Screens/Lists/Lists'
import { Router } from '@reach/router'

function App() {
  return (
    <Router>
      <Home path='/' />
      <Lists path='/directory' />
    </Router>
  );
}

export default App;
