import React from 'react';
import Weather from './components/Weather/weather'

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <h1>Austin 5 day Weather Forecast</h1>
          <div id="weatherContainer">
            <Weather />
          </div>
      </div>
    </div>
  );
}

export default App;
