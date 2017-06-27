import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavComponent';
import Side from './components/SideComponent';
import Home from './components/HomeComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
        <div className="App-header">
        <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Profile Workshop</h2>
        </div>

        <div className="sidebar">
          <Side name="Sara Kevorkian"/>
        </div>
        <main className="home">
          <Home />
        </main>
      </div>
        );
    }
}

export default App;
