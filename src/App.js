import React, { Component } from 'react'
import './App.css';
import Pokedex from './Components/Pokedex'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>
        <h1>Pokédex</h1>
        </div>
        <Pokedex/>
      </div>
    );
  }

}

export default App;
