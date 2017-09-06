import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tinderable from 'react-tinderable';
import './style.css';

var data = [
  {
    title: 'A wonderful day',
    text: '—— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— -',
    image: '',
    id: '1'
  },
  {
    title: 'My amazing journey',
    text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ——— ———— ',
    image: '',
    id: '2'
  },
  {
    title: 'Three recipes without cocoa',
    text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ———',
    image: '',
    id: '3'
  },
  {
    title: 'Generic clickbait title',
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
