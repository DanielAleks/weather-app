import React, { useState } from 'react';
import './App.css';
import './style.sass'
import Navbar from './components/navbar/Navbar';
import Home from './components/current-location';
import SearchLocation from './components/search-location';
import WeatherInfo from './components/weather-info';
import SearchRegion from './components/search-location/SearchRegion';
import Hourly3Graph from './components/weather-info/Hourly3Graph';
import Hourly1Weather from './components/weather-info/hourly/Hourly1Weather';
import MinuteGraph from './components/weather-info/MinuteGraph';
import DailyWeather from './components/weather-info/DailyWeather';
import WeatherGraph from './components/weather-info/WeatherGraph';


function App() {
  const API_key = "32f3b397668a2fd0f83f5e6f0e4c6375"
  const YOUR_API_KEY = '32902a43900f400cae0210316210701'

  return (
    <div>
      <Navbar />

      <div className="body" style={{ width: '50vw', position: 'absolute', right: '25%' }}>
        <SearchLocation YOUR_API_KEY={YOUR_API_KEY} />
        <SearchRegion />

        {/* //* TODAY */}
        <WeatherInfo YOUR_API_KEY={YOUR_API_KEY} />
        {/* <Home/> */}

        {/* //*DAILY */}
        <MinuteGraph YOUR_API_KEY={YOUR_API_KEY} />

        {/* //*HOURLY */}
        <Hourly1Weather YOUR_API_KEY={YOUR_API_KEY} />




        {/* <div style={{ backgroundColor: '#2e2e2e' }}>
        <WeatherGraph />
        
        <Hourly3Graph API_key={API_key} />
        <DailyWeather API_key={API_key} />
      </div> */}
      </div>
    </div>
  )
}

export default App;
