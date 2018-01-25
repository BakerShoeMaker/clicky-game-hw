import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Gamearea from './components/Gamearea';

class App extends Component {

  render(){
    return (
        <div>
          <Header/>
          <Gamearea/>
        </div>
    );
  }
}

export default App;
