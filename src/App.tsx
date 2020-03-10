import React from 'react';
import './App.sass';
import BeginEndCont from './containers/BeginEnd';
import StreetViewCont from './containers/StreetView';
import MapCont from './containers/Map';
import ScoreDataCont from './containers/ScoreData';

// Circle loader on buttons of the app
export const buttonLoad = (elem: HTMLElement ) => {
    let iElem = elem.getElementsByTagName('i')[0];
    iElem.classList.add('fa');
    iElem.classList.add('fa-circle-o-notch');
    iElem.classList.add('fa-spin');
}

// Main App container
function App() {
  return (
    <div className="App">
        <header className="App-header">
          <BeginEndCont />
          {/* Render the map and streetView in a row */}
          <div className='row'>
            <StreetViewCont />
            <MapCont />
          </div>
          <ScoreDataCont /> 
        </header>
      </div>
  )
}

export default App;
