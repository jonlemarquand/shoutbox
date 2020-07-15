import React from 'react';
import logo from './logo.svg';

import Sidebar from './containers/Sidebar/Sidebar';
import Homescreen from './containers/Homescreen/Homescreen';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homescreen />
    </div>
  );
}

export default App;