import React from 'react';
import './App.sass';
import BeginEndCont from './containers/BeginEnd';
import StreetViewCont from './containers/StreetView';
import MapCont from './containers/Map';
import ScoreDataCont from './containers/ScoreData';

export const buttonLoad = (elem: HTMLElement ) => {
/*  fa fa-circle-o-notch fa-spin */
    let iElem = elem.getElementsByTagName('i')[0];
    iElem.classList.add('fa');
    iElem.classList.add('fa-circle-o-notch');
    iElem.classList.add('fa-spin');
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <BeginEndCont />
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
