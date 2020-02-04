import React from 'react';
import './App.css';
import BeginEndCont from './containers/BeginEnd';
import StreetViewCont from './containers/StreetView';
import MapCont from './containers/Map';
import ScoreDataCont from './containers/ScoreData';

function App() {
  console.log("render App");
  return (
    <div className="App">
        <header className="App-header">
          <BeginEndCont />
          <StreetViewCont />
          <MapCont />
          <ScoreDataCont />
        </header>
      </div>
  )
}

export default App;
