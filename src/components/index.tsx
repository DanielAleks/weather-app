import React from 'react';
import Navbar from './navbar/Navbar';
import Current from './weather-info/current/Current';
import Daily from './weather-info/daily/Daily';
import Hourly from './weather-info/hourly/Hourly';
import SearchBar from './top-section/search-bar/SearchBar';
import './index.sass'
import ImageSection from './top-section/image-section/ImageSection';

function Index() {
  const YOUR_API_KEY = '32902a43900f400cae0210316210701'

  return (
    <div>
      <Navbar />

      <div className="project-container">
        <ImageSection YOUR_API_KEY={YOUR_API_KEY} />
        <SearchBar />

        {/* //* TODAY */}
        <Current YOUR_API_KEY={YOUR_API_KEY} />

        {/* //*DAILY */}
        <Daily YOUR_API_KEY={YOUR_API_KEY} />

        {/* //*HOURLY */}
        <Hourly YOUR_API_KEY={YOUR_API_KEY} />

      </div>
    </div>
  )
}

export default Index
