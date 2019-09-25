import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentApi from './ComponentApi';
import Forceupdate from './Forceupdate';
import FindDOMNode from './FindDOMNode';

function App() {
  return (
    <div className="App">
          <h1>Indium</h1>
          <ComponentApi />
          <Forceupdate />
          <FindDOMNode />
    </div>
  );
}

export default App;
