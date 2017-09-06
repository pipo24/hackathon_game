import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tinderable from './lib/tinderable.js';
import './style.css';

var data = [
  {
    title: 'Sell your start up to Google?',
    text: '—— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— -',
    image: '',
    id: '1'
  },
  {
    title: 'Fire the developer?',
    text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ——— ———— ',
    image: '',
    id: '2'
  },
  {
    title: 'Do you find an office',
    text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ———',
    image: '',
    id: '3'
  },
  {
    title: 'Do you hire a developer?',
    text: ' —— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— - ——— ',
    image: '',
    id: '4'
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Tinderable initialCardsData={data} />
      </div>
    );
  }
}


export default App;
