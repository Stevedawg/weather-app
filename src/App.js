import React from 'react';
import Weather from './components/Weather/weather'

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <div className="headlineWrapper">
          <h1>Austin 5 day Weather Forecast</h1>
        </div>
        <div id="weatherContainer">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
