import React, { Component } from 'react';
import './App.css';
import Google from './Google'
import Event from './Event'
import Weather from './Weather'
import Lodging from './Lodging'
import 'tachyons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
            <h1 className='tc'>Roadtrip</h1>
            <Google />
            <Event />
            <Weather />
            <Lodging />
        </div>
      </div>
    );
  }
}

export default App;
