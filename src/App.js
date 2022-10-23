import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import IniTabBro from './Components/TabBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <IniTabBro />
      </div>
    );
  }
}

export default App;
