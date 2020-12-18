import Routes from './Routes'
import './App.css';
 import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
// import MenuPage from './Components/MenuPage';
import React, {Component} from 'react';

function App () {
    return (
      <div className="App">
        <Routes />
       <HomePage />
  
       
      </div>
    );
}

export default App;
