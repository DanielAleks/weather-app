import React from 'react';
import './App.css';
import './style.sass'
import Navbar from './components/navbar/Navbar';
import Home from './components/current-location';
import SearchLocation from './components/search-location';
import WeatherInfo from './components/weather-info';


function App() {

  return (
    <div className="body">
      <Navbar />

      <div>
        <SearchLocation/>

        <div style={{ display: 'flex' }}>
          <div>
            <Home />
          </div>

          <div>
            <WeatherInfo/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;
